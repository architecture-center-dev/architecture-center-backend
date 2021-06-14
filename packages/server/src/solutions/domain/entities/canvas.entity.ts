import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'canvas' })
@ObjectType()
export class Canvas {

    @ObjectIdColumn()
    @Field(type => String)
    canvas_id: ObjectID;

    @Field(type => String)
    @Column()
    solution_id: String;

    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    dependencies: String;
    
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    technology: String;
    
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    patterns: String;
    
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    problem: String;
    
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    func_requirement: String;
    
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    non_func_requirement: String;
    
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    context: String;
    
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    difficulties: String;
    
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    advantages: String;
    
    @Field(type => Date)
    @CreateDateColumn()
    created_at: Date;

    @Field(type => Date)
    @UpdateDateColumn()
    updated_at: Date;
}
