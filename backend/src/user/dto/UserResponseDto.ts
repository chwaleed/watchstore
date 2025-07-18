import { Exclude } from 'class-transformer';

export class UserResponseDto {
  id: number;

  email: string;

  firstName: string;

  lastName?: string;

  phone?: string;

  role: string;

  createdAt: Date;

  updatedAt: Date;

  @Exclude()
  password: string;
}
