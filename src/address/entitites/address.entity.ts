import { CityEntity } from '../../city/entitites/city.entity';
import { UserEntity } from './../../user/entitites/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

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

    @ManyToOne(() => UserEntity, (userEntity) => userEntity.addresses)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    user?: UserEntity

    @ManyToOne(() => CityEntity, (cityEntity) => cityEntity.addresses)
    @JoinColumn({name: 'city_id', referencedColumnName: 'id'})
    city?: CityEntity
}