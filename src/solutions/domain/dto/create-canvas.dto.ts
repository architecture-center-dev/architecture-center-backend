import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCanvasDto {
    @Field()
    solution_id: String;

    @Field(type => [String],{nullable:true})
    dependencies: String;

    @Field(type => [String],{nullable:true})
    technology: String;

    @Field(type => [String],{nullable:true})
    patterns: String;

    @Field(type => [String],{nullable:true})
    problem: String;

    @Field(type => [String],{nullable:true})
    func_requirement: String;

    @Field(type => [String],{nullable:true})
    non_func_requirement: String;

    @Field(type => [String],{nullable:true})
    context: String;

    @Field(type => [String],{nullable:true})
    difficulties: String;

    @Field(type => [String],{nullable:true})
    advantages: String;
}
