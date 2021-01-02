import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'attachments' })
@ObjectType()
export class Attachment {

    @ObjectIdColumn()
    @Field(type => String)
    attachment_id: ObjectID;

    @Field()
    @Column()
    url: String;

    @Field()
    @Column()
    filename: String;
    
    @Field()
    @Column()
    encoding: String;;

    @Field()
    @Column()
    mimetype: String;

    @Field(type => Date)
    @CreateDateColumn()
    created_at: Date;

    @Field(type => Date)
    @UpdateDateColumn()
    updated_at: Date;
}

  
