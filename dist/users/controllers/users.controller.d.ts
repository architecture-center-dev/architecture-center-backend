import { UserService } from '../services/user.service';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("../Entities/user.entity").User[]>;
}
