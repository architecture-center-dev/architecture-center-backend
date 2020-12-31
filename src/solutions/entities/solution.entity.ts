import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'solutions' })
@ObjectType()
export class Solution {

    @ObjectIdColumn()
    @Field(type => String)
    solution_id: ObjectID;

    @Field({nullable: true})
    @Column({ nullable: true })
    name: String;

    @Field(type => [String])
    @Column({ array: true})
    tags: String;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}