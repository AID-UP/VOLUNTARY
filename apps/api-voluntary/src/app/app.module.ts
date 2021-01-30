import { AppService } from './app.service';
import { AppController } from './app.controller';
import { VolunteersModule } from './Volunteers/Volunteers.module';
import { Module } from '@nestjs/common';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'voluntary'),
      exclude: ['/api*']
    }),


    MongooseModule.forRoot("mongodb+srv://user01AIDUP:885522@aidup.or0ro.mongodb.net/CIM?retryWrites=true&w=majority"),
    VolunteersModule
  ],
  controllers: [ AppController],
  providers: [AppService],        
})
export class AppModule {}
