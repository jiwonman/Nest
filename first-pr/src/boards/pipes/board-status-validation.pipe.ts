import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board.model";

export class BoardStatusValidationPipe implements PipeTransform {

    // readonly : 외부 접근은 가능하지만 값 변경 불가
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value: any) {
        value = value.toUpperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in the status`);
        }

        return value;
    }

    private isStatusValid(status: any) {
        // indexOf(value) : value값과 맞으면 해당 인덱스 값을 return해주고 없을 경우 -1 return
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}