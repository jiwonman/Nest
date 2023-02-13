import { SetMetadata } from "@nestjs/common/decorators";

export const TYPEORM_EX_CUSTOM_REPOSITORY = "TYPEORM_EX_CUSTOM_REPOSITORY";

export function CustomRepository(entity: Function): ClassDecorator{
    return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}