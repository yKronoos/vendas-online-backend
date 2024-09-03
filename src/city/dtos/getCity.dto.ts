import { GetStateDTO } from '../../state/dtos/getState.dto';
import { CityEntity } from './../entitites/city.entity';
export class GetCityDTO{
    id: number
    name: string
    state?: GetStateDTO

    constructor(entity:CityEntity){
        this.id = entity.id
        this.name = entity.name
        this.state =  entity.state ? new GetStateDTO(entity.state) : undefined
    }
}