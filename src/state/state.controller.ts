import { StateService } from './state.service';
import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entitites/state.entity';
import { Repository } from 'typeorm';

@Controller('state')
export class StateController {

    constructor(private readonly stateService:StateService){}

    @Get()
    async getAll(){
        return await this.stateService.getAll()
    }

}
