import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v4 as uuid } from 'uuid';

@Injectable() // Injectable 데코레이터 덕분에 NestJS 어디서든 사용 가능

// DB 작업 (Service)
export class BoardsService {
    private boards: Board[] = [];    // private를 사용하지 않으면 다른 컴포넌트에서 수정 가능

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title: string, description: string) {
        const board: Board = {
            id : uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,     // Default 값을 PUBLIC으로 함.
        }

        this.boards.push(board);
        return board;
    }
}
