import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entitites/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {
    constructor(
        @InjectRepository(StateEntity)
        private  readonly stateRepository: Repository<StateEntity>
    ){}

    async getAll(){
        return this.stateRepository.find()
    }
}
