import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entitites/address.entity';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { CityModule } from '../city/city.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AddressEntity]),
    UserModule,
    CityModule
  ],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule {}
