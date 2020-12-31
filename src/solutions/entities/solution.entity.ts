import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'solutions' })
@ObjectType()
export class Solution {

    @ObjectIdColumn()
    @Field(type => String)
    solution_id: ObjectID;

    @Field()
    @Column()
    name: String;

    @Field()
    @Column()
    customer: String;

    @Field()
    @Column()
    project: String;

    @Field()
    @Column()
    market: String;

    @Field()
    @Column()
    year_month: String;

    @Field()
    @Column()
    description: String;

    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    tags: String;
    
    @Field(type => Date)
    @CreateDateColumn()
    created_at: Date;

    @Field(type => Date)
    @UpdateDateColumn()
    updated_at: Date;
}
