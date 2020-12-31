import { SolutionsService } from '../solutions.service';
import { Solution } from '../entities/solution.entity';
export declare class SolutionResolver {
    private solutionService;
    constructor(solutionService: SolutionsService);
    solution(search: string): Promise<Solution[]>;
}
