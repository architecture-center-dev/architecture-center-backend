import { AuthService } from '../services/auth.service';
export declare class UserResolver {
    private authService;
    constructor(authService: AuthService);
    users(user: any): Promise<any[]>;
    login(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
