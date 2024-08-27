import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entitites/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {

    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>
    ) {}

    async get(cityId: number){

        const city = await this.cityRepository.findOne({
            where: {
                id: cityId
            }
        })
        
        if(!city){
            throw new NotFoundException('CITY NOT FOUND')
        }

        return city
    }

}
