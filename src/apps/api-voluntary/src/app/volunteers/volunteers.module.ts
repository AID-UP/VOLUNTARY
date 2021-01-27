import { Module } from '@nestjs/common';
import { VolunteersModule } from './volunteers/volunteers.module';

@Module({
  imports: [VolunteersModule]
})
export class VolunteersModule {}
