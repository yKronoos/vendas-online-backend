import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { AddressEntity } from "../../address/entitites/address.entity"
import { StateEntity } from "../../state/entitites/state.entity"

@Entity({name: 'city'})
export class CityEntity{
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id?: number

    @Column({name: "state_id"})
    stateId: number

    @Column()
    name: string

    @CreateDateColumn()
    createdAt?: Date

    @CreateDateColumn()
    updatedAt?: Date

    @OneToMany(() => AddressEntity, (addressEntity) => addressEntity.city)
    addresses?: AddressEntity[]
    
    @ManyToOne(() => StateEntity, (stateEntity) => stateEntity.cities)
    @JoinColumn({name: 'state_id', referencedColumnName: 'id'})
    state?: StateEntity
}