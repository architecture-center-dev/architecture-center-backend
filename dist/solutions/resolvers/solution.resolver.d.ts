import { SolutionsService } from '../solutions.service';
import { Solution } from '../entities/solution.entity';
export declare class SolutionResolver {
    private solutionService;
    constructor(solutionService: SolutionsService);
    solution(search: string): Promise<Solution[]>;
    solutionById(solution_id: string): Promise<Solution>;
    createTagSolution(solution_id: string, tag: string): Promise<Solution>;
    createTeamMemberSolution(solution_id: string, team_member: string): Promise<Solution>;
}
