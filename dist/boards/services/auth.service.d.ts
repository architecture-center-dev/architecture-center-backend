import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/services/user.service';
import { UserDto } from '../dto/user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    registerUser(userDto: UserDto): Promise<String | import("../../users/Entities/user.entity").User>;
}
