import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { CityEntity } from "../../city/entitites/city.entity"

@Entity({name: 'state'})
export class StateEntity{
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id?: number

    @Column()
    name: string

    @CreateDateColumn()
    createdAt?: Date

    @CreateDateColumn()
    updatedAt?: Date

    @OneToMany(() => CityEntity, (cityEntity) => cityEntity.state)
    cities?: CityEntity[]
}