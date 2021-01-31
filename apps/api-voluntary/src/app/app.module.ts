import { AppService } from './app.service';
import { AppController } from './app.controller';
import { VolunteersModule } from './Volunteers/Volunteers.module';
import { Module } from '@nestjs/common';



import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://user01AIDUP:885522@aidup.or0ro.mongodb.net/CIM?retryWrites=true&w=majority"),
    VolunteersModule
  ],
  controllers: [ AppController],
  providers: [AppService],        
})
export class AppModule {}
