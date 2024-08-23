import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}