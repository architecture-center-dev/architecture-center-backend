import { OauthTOken } from '../../users/Entities/oauth-token.type';
import { AuthService } from '../services/auth.service';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(username: string, password: string): Promise<OauthTOken>;
}
