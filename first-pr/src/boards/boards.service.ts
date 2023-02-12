import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v4 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable() // Injectable 데코레이터 덕분에 NestJS 어디서든 사용 가능

// DB 작업 (Service)
export class BoardsService {
    private boards: Board[] = [];    // private를 사용하지 않으면 다른 컴포넌트에서 수정 가능

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto): Board {
        const { title, description } = createBoardDto;

        const board: Board = {
            id : uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,     // Default 값을 PUBLIC으로 함.
        }

        this.boards.push(board);
        return board;
    }

    getBoardById(id:string): Board {
        const found = this.boards.find((board) => board.id === id);
        
        if(!found){
            throw new NotFoundException(`Can't find Board With id ${id}`);
        }

        return found;
    }
 
    deleteBoard(id:string): void{
        const found = this.getBoardById(id);
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatus(id:string, status:BoardStatus): Board{
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
