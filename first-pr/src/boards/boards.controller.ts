import { Body, Controller, Get, Post, Param, Delete, Patch, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

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

    @Get('/')
    getAllTask(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoardDto: CreateBoardDto): Board
        // @Body('title') title: string,
        // @Body('description') description: string,
        {
        // console.log('title', title);
        // console.log('description', description);
        // return this.boardsService.createBoard(title, description);
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete("/:id")
    deleteBoard(@Param('id') id:string) : void {
        this.boardsService.deleteBoard(id);
        console.log('id 지워짐', id);
    }

    @Patch("/:id/status")
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    ) {
        return this.boardsService.updateBoardStatus(id, status);
    }
}
