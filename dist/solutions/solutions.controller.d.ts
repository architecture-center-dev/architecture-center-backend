import { SolutionsService } from './solutions.service';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
export declare class SolutionsController {
    private readonly solutionsService;
    constructor(solutionsService: SolutionsService);
    create(createSolutionDto: CreateSolutionDto): Promise<CreateSolutionDto & import("./domain/entities/solution.entity").Solution>;
    createTags(solution_id: string, updateSolutionDto: UpdateSolutionDto): Promise<import("./domain/entities/solution.entity").Solution>;
    createTeamMember(solution_id: string, request: Object): Promise<import("./domain/entities/solution.entity").Solution>;
    findAll(query: Object): Promise<import("./domain/entities/solution.entity").Solution[]>;
    findOne(id: string): Promise<import("./domain/entities/solution.entity").Solution>;
    update(id: string, updateSolutionDto: UpdateSolutionDto): string;
    remove(id: string): string;
}
