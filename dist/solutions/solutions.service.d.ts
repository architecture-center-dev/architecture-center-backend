import { Repository } from 'typeorm';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
import { Solution } from './entities/solution.entity';
export declare class SolutionsService {
    private userRepository;
    constructor(userRepository: Repository<Solution>);
    create(createSolutionDto: CreateSolutionDto): Promise<CreateSolutionDto & Solution>;
    findAll(filter: String): Promise<Solution[]>;
    findOne(where: object): Promise<Solution>;
    update(id: number, updateSolutionDto: UpdateSolutionDto): string;
    remove(id: number): string;
    createTag(solution_id: string, tag: string): Promise<Solution>;
}
