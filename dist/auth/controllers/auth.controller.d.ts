import { AuthService } from '../services/auth.service';
import { UserDto } from '../dto/user.dto';
import { User } from 'src/users/Entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    registerUser(userDto: UserDto): Promise<String | User>;
}
