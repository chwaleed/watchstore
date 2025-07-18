import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { hash } from 'bcryptjs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async register(userDto: CreateUserDto) {
    const hashedPassword = await hash(userDto.password, 10);

    const userData = {
      ...userDto,
      password: hashedPassword,
    };

    const newUser = this.userRepository.create(userData);

    const { password, ...userWithoutPassword } =
      await this.userRepository.save(newUser);

    return userWithoutPassword;

    // Return user data without password
  }
}
