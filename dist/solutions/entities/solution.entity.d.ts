import { ObjectID } from "typeorm";
export declare class Solution {
    solution_id: ObjectID;
    name: String;
    customer: String;
    project: String;
    market: String;
    year_month: String;
    description: String;
    big_picture: String;
    tags: String;
    team_members: String;
    created_at: Date;
    updated_at: Date;
}
