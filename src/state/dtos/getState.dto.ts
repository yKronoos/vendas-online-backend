import { StateEntity } from "../entitites/state.entity"

export class GetStateDTO{
    id: number
    name: string

    constructor(stateEntity: StateEntity){
        this.id = stateEntity.id
        this.name = stateEntity.name
    }
}