import { BoardService } from '../services/board.service';
export declare class BoardsController {
    private boardService;
    constructor(boardService: BoardService);
    getProfile(req: any): Promise<import("../Entities/board.entitie").Board[]>;
}
