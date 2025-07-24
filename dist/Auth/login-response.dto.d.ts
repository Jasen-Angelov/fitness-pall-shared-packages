import { UserDTO } from '../Users/user.dto';
export interface LoginResponse {
    success: boolean;
    data?: {
        user: UserDTO;
        token: string;
    };
    message?: string;
}
