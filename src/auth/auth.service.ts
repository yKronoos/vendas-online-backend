import { UserService } from './../user/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDTO } from './dtos/login.dto';
import { compare, hash } from 'bcrypt';
import { NotFoundError } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { GetUserDTO } from '../user/dtos/getUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { GetLoginDTO } from './dtos/getLogin.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    async login(login: LoginDTO){
        const user = await this.userService.getUserByEmail(login.email)

        const isMatch = await compare(login.password, user?.password)

        if(!user || !isMatch){
            throw new NotFoundException('Email or password is invalid')
        }

        const userLogin: GetLoginDTO = {
            accessToken: this.jwtService.sign({...new LoginPayload(user)}),
            user: new GetUserDTO(user)
        }

        return userLogin
    }

}
