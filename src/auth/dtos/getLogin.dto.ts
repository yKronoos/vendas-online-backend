import { GetUserDTO } from "../../user/dtos/getUser.dto";

export class GetLoginDTO{
    user: GetUserDTO
    accessToken: string
}