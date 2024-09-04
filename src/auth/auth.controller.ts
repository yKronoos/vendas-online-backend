import { GetUserDTO } from './../user/dtos/getUser.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDTO } from './dtos/login.dto';
import { GetLoginDTO } from './dtos/getLogin.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() login: LoginDTO){
        return this.authService.login(login)
    }

}
