import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateAddressDTO } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enums/userType.dto';

@Controller('address')
export class AddressController {

    constructor(private readonly addressService: AddressService){}

    @Roles(UserType.Admin)
    @UsePipes(ValidationPipe)
    @Post('/:userId')
    async create(@Body() address: CreateAddressDTO, @Param('userId') userId: number){
        return await this.addressService.create(address, userId)
    }

}
