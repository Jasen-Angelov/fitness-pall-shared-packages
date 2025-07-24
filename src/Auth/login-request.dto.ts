import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginRequest {
    @IsEmail({}, { message: 'Must be a valid email address' })
    email!: string;

    @IsNotEmpty({ message: 'Password is required' })
    @Length(8, 128, { message: 'Password must be at least 8 characters' })
    password!: string;
}
