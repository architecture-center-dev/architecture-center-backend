import { ObjectID } from "typeorm";
import { Image } from "./image.entity";
export declare class User {
    id: ObjectID;
    name: String;
    lastname: String;
    email: String;
    firstAccess: boolean;
    password: String;
    image: Image;
}
