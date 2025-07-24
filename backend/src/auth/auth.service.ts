import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { compare, hash } from 'bcryptjs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RefreshToken } from './entities/refreshToken.entity';
import { RefreshTokenDto } from './dto/refreshToken.dto';

export interface tokenPayload {
  userId: number;
  role: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(RefreshToken)
    private readonly refreshTokenRepository: Repository<RefreshToken>,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto, userAgent?: string, ip?: string) {
    try {
      const hashedPassword = await hash(userDto.password, 10);

      const userData = {
        ...userDto,
        password: hashedPassword,
      };

      const newUser = this.userRepository.create(userData);
      const savedUser = await this.userRepository.save(newUser);

      const { password, ...userWithoutPassword } = savedUser;

      const accessToken = this.generateToken(
        savedUser.id,
        savedUser.role,
        savedUser.email,
        'access',
      );

      const refreshToken = this.generateToken(
        savedUser.id,
        savedUser.role,
        savedUser.email,
        'refresh',
      );

      // Save refresh token to database
      await this.saveRefreshToken(savedUser, refreshToken, userAgent, ip);

      return {
        user: userWithoutPassword,
        accessToken,
      };
    } catch {
      throw new ConflictException('User with this email already exists');
    }
  }

  async login(loginDto: LoginDto, userAgent?: string, ip?: string) {
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new NotFoundException('User with this email does not exist');
    }

    const isPasswordValid = await compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password, ...userWithoutPassword } = user;

    const accessToken = this.generateToken(
      user.id,
      user.role,
      user.email,
      'access',
    );

    const refreshToken = this.generateToken(
      user.id,
      user.role,
      user.email,
      'refresh',
    );

    // Save refresh token to database
    await this.saveRefreshToken(user, refreshToken, userAgent, ip);

    return {
      user: userWithoutPassword,
      accessToken,
    };
  }

  async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    try {
      // Verify the refresh token
      const payload = this.jwtService.verify(refreshTokenDto.token) as {
        userId: number;
        role: string;
        email: string;
      } | null;

      // Find the refresh token in database
      const storedToken = await this.refreshTokenRepository.findOne({
        where: {
          token: refreshTokenDto.token,
          revoked: false,
        },
        relations: ['user'],
      });

      if (!storedToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Check if token is expired
      if (storedToken.expiresAt < new Date()) {
        await this.revokeRefreshToken(refreshTokenDto.token);
        throw new UnauthorizedException('Refresh token expired');
      }

      if (!payload) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Generate new tokens
      const accessToken = this.generateToken(
        payload.userId,
        payload.role,
        payload.email,
        'access',
      );

      const newRefreshToken = this.generateToken(
        payload.userId,
        payload.role,
        payload.email,
        'refresh',
      );

      // Revoke old refresh token
      await this.revokeRefreshToken(refreshTokenDto.token);

      // Save new refresh token
      await this.saveRefreshToken(
        storedToken.user,
        newRefreshToken,
        refreshTokenDto.userAgent,
        refreshTokenDto.ip,
      );

      return {
        accessToken,
        refreshToken: newRefreshToken,
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(refreshToken: string) {
    await this.revokeRefreshToken(refreshToken);
    return { message: 'Logged out successfully' };
  }

  async logoutFromAllDevices(userId: number) {
    await this.refreshTokenRepository.update(
      { user: { id: userId } },
      { revoked: true },
    );
    return { message: 'Logged out from all devices successfully' };
  }

  private async saveRefreshToken(
    user: User,
    token: string,
    userAgent?: string,
    ip?: string,
  ): Promise<RefreshToken> {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    const refreshTokenEntity = this.refreshTokenRepository.create({
      user,
      token,
      expiresAt,
      userAgent,
      ip,
    });

    return this.refreshTokenRepository.save(refreshTokenEntity);
  }

  private async revokeRefreshToken(token: string): Promise<void> {
    await this.refreshTokenRepository.update({ token }, { revoked: true });
  }

  private generateToken(
    userId: string | number,
    role: string,
    email: string,
    tokenType: 'access' | 'refresh',
  ) {
    const expiresIn = tokenType === 'access' ? '15m' : '7d';
    const payload = { userId, role, email };
    return this.jwtService.sign(payload, {
      expiresIn: expiresIn,
    });
  }

  async validateUser(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
