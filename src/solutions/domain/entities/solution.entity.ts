import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'solutions' })
@ObjectType()
export class Solution {
    
    @ObjectIdColumn()
    @Field(type => String)
    @ApiProperty({type: String})
    solution_id: ObjectID;
    
    @ApiProperty()
    @Field()
    @Column()
    name: String;
    
    @ApiProperty()    
    @Field()
    @Column()
    customer: String;
    
    @ApiProperty()    
    @Field()
    @Column()
    project: String;
    
    @ApiProperty()    
    @Field()
    @Column()
    market: String;
    
    @ApiProperty()    
    @Field()
    @Column()
    year_month: String;
    
    @ApiProperty()    
    @Field()
    @Column()
    description: String;
    
    @ApiProperty()        
    @Field(type => String,{nullable:true})
    @Column()
    big_picture: String;
    
    @ApiProperty({type: [String]})
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    tags: String;
    
    @ApiProperty({type: [String]})        
    @Field(type => [String],{nullable:true})
    @Column({ array: true, nullable:true})
    team_members: String;
    
    @ApiProperty()        
    @Field(type => Date)
    @CreateDateColumn()
    created_at: Date;
    
    @ApiProperty()    
    @Field(type => Date)
    @UpdateDateColumn()
    updated_at: Date;
}
