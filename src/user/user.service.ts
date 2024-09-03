import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserEntity } from './entitites/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async create(user: CreateUserDTO){

        const saltOrRounds = 10

        const pass = await hash(user.password, saltOrRounds)
        
        const userToSave: UserEntity = {
            ... user,
            password: pass
        }

        return this.userRepository.save(userToSave)
    }

    async getAll(){
        return this.userRepository.find()
    }

    async getUser(userId: number){

        const user =  await this.userRepository.findOne({
            where: {
                id: userId
            },
            relations: {
                addresses: {
                    city: {
                        state: true
                    }
                },
            }
        })

        if(!user){
            throw new NotFoundException('USER NOT FOUND');
        }

        return user
    }

    async getUserByEmail(email: string){

        const user =  await this.userRepository.findOne({
            where: {
                email: email
            }
        })

        if(!user){
            throw new NotFoundException('USER NOT FOUND');
        }

        return user
    }

}
