import { SolutionsService } from './solutions.service';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
export declare class SolutionsController {
    private readonly solutionsService;
    constructor(solutionsService: SolutionsService);
    create(createSolutionDto: CreateSolutionDto): Promise<CreateSolutionDto & import("./entities/solution.entity").Solution>;
    findAll(query: Object): Promise<import("./entities/solution.entity").Solution[]>;
    findOne(id: string): Promise<import("./entities/solution.entity").Solution>;
    update(id: string, updateSolutionDto: UpdateSolutionDto): string;
    remove(id: string): string;
}
