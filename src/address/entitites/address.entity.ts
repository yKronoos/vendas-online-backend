import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'address'})
export class AddressEntity{
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id?: number

    @Column({name: "user_id"})
    userId: number

    @Column()
    complement?: string

    @Column({name: "number"})
    numberAdress?: number

    @Column()
    cep: string

    @Column({name: "city_id"})
    cityId: number

    @CreateDateColumn()
    createdAt?: Date

    @CreateDateColumn()
    updatedAt?: Date
}