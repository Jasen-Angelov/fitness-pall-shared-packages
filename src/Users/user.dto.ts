import {
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    Min,
    Length,
    Matches
} from 'class-validator';
import { Exclude } from 'class-transformer';

export enum UserRole {
    USER    = 'user',
    TRAINER = 'trainer',
    ADMIN   = 'admin',
}

export class UserDTO {
    @IsInt()
    id!: number;

    @IsNotEmpty()
    @Length(2, 50)
    name!: string;

    @IsEmail()
    email!: string;

    @IsInt()
    @Min(0)
    age!: number;

    @IsEnum(UserRole)
    role!: UserRole;

    // ——————————————————————
    // password fields (write only)
    // ——————————————————————

    @Exclude({ toPlainOnly: true })        // never include in plain output
    @IsNotEmpty()
    @Length(8, 128)
    @Matches(/(?=.*[A-Z])/, {
        message: 'password must contain at least one uppercase letter',
    })
    password!: string;

    @Exclude({ toPlainOnly: true })
    @IsNotEmpty()
    @Length(8, 128)
    confirmPassword!: string;
}
