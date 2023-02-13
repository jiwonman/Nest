import { CustomRepository } from "src/database/typeorm-ex.decorator";
import { Board } from "./board.entity";

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {

}