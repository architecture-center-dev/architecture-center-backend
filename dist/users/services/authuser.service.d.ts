export declare type User = any;
export declare class AuthuserService {
    private readonly users;
    constructor();
    findOne(username: string): Promise<User | undefined>;
}
