import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Board } from "src/boards/board.entity";

export const typeORMConfig : TypeOrmModuleOptions = {
    type : "postgres",
    host : "localhost",
    port : 5432,
    username : "postgres",
    password : "kusa1230",
    database : "board-app",
    // entities를 이용해서 데이터베이스 테이블을 생성한다. 
    // 그래서 엔티티 파일이 어디에 있는지 설명해준다.
    entities : [__dirname + '/../**/*.entity.{js,ts}', Board],
    // synchronize값을 true로 주면 애플리케이션을 다시 실행할 때 
    // 엔티티안에 수정된 컬럼의 길이 타입 변경값들을 해당 테이블을 Drop 한 후 다시 생성해준다.
    synchronize : true
}