import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { AddressEntity } from "../../address/entitites/address.entity"

@Entity({name: 'user'})
export class UserEntity{
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id?: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    cpf: string

    @Column()
    password: string
    
    @Column({name: 'type_user'})
    typeUser: number

    @CreateDateColumn({name: 'created_at' , nullable: true})
    createdAt?: Date
    
    @CreateDateColumn({name: 'updated_at', nullable: true})
    updatedAt?: Date

    @OneToMany(() => AddressEntity, (addressEntity) => addressEntity.user)
    addresses?: AddressEntity[]
}