import { IsEmail, IsNumber, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDTO{
    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsString()
    phone: string
    
    @IsString()
    cpf: string

    @IsStrongPassword({
        minLength: 0,
        minNumbers: 0

    })    
    password: string

    @IsNumber()
    typeUser: number
}