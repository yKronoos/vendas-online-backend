import { GetCityDTO } from '../../city/dtos/getCity.dto';
import { AddressEntity } from './../entitites/address.entity';
export class GetAddressesDTO{
    complement: string
    numberAdress: number
    cep: string
    city?: GetCityDTO

    constructor(entity:AddressEntity){
        this.complement =  entity.complement
        this.numberAdress = entity.numberAdress
        this.cep = entity.cep
        this.city = entity.city ? new GetCityDTO(entity.city) : undefined 
    }
}