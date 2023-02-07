import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
// BoardController에서 BoardService를 이용할 수 있게 하기 위해서(Dependency Injection)
// Constructor 클래스 안에서 이루어 진다.
export class BoardsController {
    // 기존 사용법
    // boardsService: BoardsService;

    // constructor(boardsService: BoardsService) {
    //     this.boardsService = boardsService;
    // }
    
    // TypeScript를 이용하여 간단하게 만든 사용법 
    // Javascript에서는 접근 제한자(public, private 등)을 사용할 수 없음.
    constructor(private boardsService: BoardsService) {}

    @Get()
    getAllTask(): Board[] {
        return this.boardsService.getAllBoards();
    }

    // @Get('/:id')
}
