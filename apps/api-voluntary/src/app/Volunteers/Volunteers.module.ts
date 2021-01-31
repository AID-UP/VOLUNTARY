import { Module } from '@nestjs/common';

import {MongooseModule} from '@nestjs/mongoose'


import {VoluntarySchema} from './../schemas/voluntary.schema'
import { VolunteersController } from './volunteers.controller';
import { VolunteersService } from './volunteers.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Voluntary', schema:VoluntarySchema}])
  ],
  controllers: [VolunteersController],
  providers: [VolunteersService],        
})
export class VolunteersModule {}
