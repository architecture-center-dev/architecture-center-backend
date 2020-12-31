import { Repository } from 'typeorm';
import { User } from '../Entities/user.entity';
export declare class UserService {
    private userRepository;
    private salt;
    constructor(userRepository: Repository<User>);
    save(email: String, password: String): Promise<User | String>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findUserByAndPassword(email: string, password: string): Promise<any>;
    remove(id: string): Promise<void>;
}
