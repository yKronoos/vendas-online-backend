import { IsString, IsStrongPassword } from "class-validator"

export class LoginDTO{
    @IsString()
    email: string
    @IsString()
    password: string
}