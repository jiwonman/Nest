export interface Board {
    id : string;
    title : string;
    description : string;
    status : BoardStatus;      // 게시글의 성격 (BoardStatus)
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}