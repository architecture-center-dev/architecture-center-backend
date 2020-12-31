import { ObjectID } from "typeorm";
export declare class Board {
    id: ObjectID;
    name: String;
    userId: ObjectID;
    createdAt: Date;
}
