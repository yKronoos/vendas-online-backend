import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/createUser.dto';
import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { GetUserDTO } from './dtos/getUser.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @UsePipes(ValidationPipe)
    @Post()
    async create(@Body() user: CreateUserDTO){
        return await this.userService.create(user)
    }

    @Get()
    async getAll(){
        const user = await this.userService.getAll()
        const dto = user.map((user) => new GetUserDTO(user))
        return dto
    }

    @Get(':userId')
    async getUser(@Param('userId') userId: number){
        const user = await this.userService.getUser(userId)
        const dto = new GetUserDTO(user)
        return dto
    }


}
