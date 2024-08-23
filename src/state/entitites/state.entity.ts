import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}