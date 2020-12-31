import { ObjectID } from "typeorm";
export declare class Solution {
    id: ObjectID;
    name: String;
    lastname: String;
    email: String;
    firstAccess: boolean;
    password: String;
    tags: String;
}
