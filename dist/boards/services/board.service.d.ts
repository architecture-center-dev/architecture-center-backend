import { Repository } from 'typeorm';
import { Board } from "../Entities/board.entitie";
export declare class BoardService {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    findAll(): Promise<Board[]>;
}
