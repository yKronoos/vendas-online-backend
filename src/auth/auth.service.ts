import { UserService } from './../user/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDTO } from './dtos/login.dto';
import { compare, hash } from 'bcrypt';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService){}

    async login(login: LoginDTO){
        const user = await this.userService.getUserByEmail(login.email)

        const isMatch = await compare(login.password, user?.password)

        if(!user || !isMatch){
            throw new NotFoundException('Email or password is invalid')
        }

        return user
    }

}
