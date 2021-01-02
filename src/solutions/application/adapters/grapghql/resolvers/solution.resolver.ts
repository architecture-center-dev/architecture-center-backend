import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql.auth.guard';
import { SolutionsService } from '../../../../domain/services/solutions.service';
import { Solution } from '../../../../domain/entities/solution.entity';
import {ObjectId} from "mongodb"
import {AWSS3Uploader} from "../../../../infrastructure/persistence/s3/AWSS3Uploader"
import { GraphQLUpload } from 'graphql-tools';
import { Attachment } from '../../../../domain/entities/attachment.entity';
import { File } from 'src/solutions/domain/services/IUploader.interface';
import { AttachmentService } from 'src/solutions/domain/services/attachment.service';

@Resolver('Solutions')
export class SolutionResolver {
  constructor(
    private solutionService: SolutionsService, private attachmentService: AttachmentService
  ) { }

  //@UseGuards(GqlAuthGuard)
  @Query(returns => [Solution])
  public async solution(@Args({ name: 'search',nullable: true }) search: string) {
    
    const solutions: Array<Solution> = await this.solutionService.findAll(search);
    
    return solutions;
  }
  
  //@UseGuards(GqlAuthGuard)
  @Query(returns => Solution, {nullable : true})
  public async solutionById(@Args({ name: 'solution_id' }) solution_id: string) {

    const solution: Solution = await this.solutionService.findOne({where:{_id: new ObjectId(solution_id)}} as object);
    
    return solution;
  }

  //@UseGuards(GqlAuthGuard)
  @Mutation(returns => Solution)
  public async createTagSolution(
    @Args({ name: 'solution_id' }) solution_id: string,
    @Args({ name: 'tag' }) tag: string,
  ) {

    const result: Solution = await this.solutionService.createTag(solution_id, tag);
    
    return result;
  }
  
  //@UseGuards(GqlAuthGuard)
  @Mutation(returns => Solution)
  public async createTeamMemberSolution(
    @Args({ name: 'solution_id' }) solution_id: string,
    @Args({ name: 'team_member' }) team_member: string,
  ) {

    const result: Solution = await this.solutionService.createTeamMember(solution_id, team_member);
    
    return result;
  }
  
  //@UseGuards(GqlAuthGuard)
  @Mutation(() => Attachment, { nullable: true })
  public async singleFileUpload(
    @Args({ name: 'file', type: () => GraphQLUpload }) file 
  ) {

    const s3Uploader = new AWSS3Uploader({ 
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      destinationBucketName: 'architecture-center',
      region: "us-east-1"
    });
    
    const attachment: Attachment = await this.attachmentService.saveAttachment(s3Uploader, file);
    console.log(attachment);
    return attachment;
  }
}