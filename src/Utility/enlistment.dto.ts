import { IsEmail, IsNotEmpty } from 'class-validator';

export class EnlistRequest {
    @IsEmail({}, { message: 'Must be a valid email address' })
    @IsNotEmpty({ message: 'Email is required' })
    email!: string;
}

export interface EnlistResponse {
    success: boolean;
    message: string;
}
