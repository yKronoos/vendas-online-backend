import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/createUser.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Post()
    async create(@Body() user: CreateUserDTO){
        return await this.userService.create(user)
    }

    @Get()
    async getAll(){
        return await this.userService.getAll()
    }


}
