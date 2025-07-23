export declare enum UserRole {
    USER = "user",
    TRAINER = "trainer",
    ADMIN = "admin"
}
export declare class UserDTO {
    id: number;
    name: string;
    email: string;
    age: number;
    role: UserRole;
    password: string;
    confirmPassword: string;
}
