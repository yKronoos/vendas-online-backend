import { UserEntity } from './../entitites/user.entity';
export class GetUserDTO{

    constructor(entity: UserEntity){
        this.id = entity.id
        this.name = entity.cpf
        this.email  = entity.email
        this.phone = entity.phone
        this.cpf = entity.cpf
        this.typeUser = entity.typeUser
        this.createdAt = entity.createdAt
        this.updatedAt = entity.updatedAt
    }

    id?: number
    name: string
    email: string
    phone: string
    cpf: string
    typeUser: number
    createdAt?: Date
    updatedAt?: Date
}