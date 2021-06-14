import { ApiProperty } from "@nestjs/swagger";

export class CreateSolutionDto {
    @ApiProperty({description : "Name of solution"})
    name: String;

    @ApiProperty({description : "Name of customer where solution was deployed"})
    customer: String;

    @ApiProperty({description : "Name of project where solution was deployed"})
    project: String;

    @ApiProperty({description : "Vertical market of the solution"})
    market: String;

    @ApiProperty({description : "Year and month when the solution was deployed"})
    year_month: String;
    
    @ApiProperty({description : "Short description about what is the solution"})
    description: String;

    @ApiProperty({description : "Tags ro search contents easier"})
    tags: String;

    @ApiProperty({description : "Big picture diagram of the project"})
    big_picture: String;

    @ApiProperty({description : "Team members of the solution when it was created"})
    team_members: String;
}
