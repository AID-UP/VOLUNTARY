import { AppService } from './app.service';
import { AppController } from './app.controller';
import { VolunteersModule } from './Volunteers/Volunteers.module';
import { Module } from '@nestjs/common';



import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    VolunteersModule
  ],
  controllers: [ AppController],
  providers: [AppService],        
})
export class AppModule {}
