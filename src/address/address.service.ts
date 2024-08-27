import { UserService } from './../user/user.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entitites/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDTO } from './dtos/createAddress.dto';
import { CityService } from '../city/city.service';

@Injectable()
export class AddressService {

    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
        private readonly userService: UserService,
        private readonly cityService: CityService
    ){}

    async create(addressDTO: CreateAddressDTO, userId: number){

        await this.userService.getUser(userId)
        await this.cityService.get(addressDTO.cityId)

        let entity : AddressEntity = {
            ...addressDTO,
            userId: userId
        }

        this.addressRepository.save(entity)
    }

}
