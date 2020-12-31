import { User } from '../Entities/user.entity';
import { UserService } from '../services/user.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(user: any): Promise<User[]>;
}
