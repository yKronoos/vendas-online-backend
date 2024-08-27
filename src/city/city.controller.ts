import { CityService } from './city.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('city')
export class CityController {

    constructor(private readonly cityService:CityService){}

    @Get(':cityId')
    async getCity(@Param('cityId') cityId: number){
        return this.cityService.get(cityId)
    }

}
