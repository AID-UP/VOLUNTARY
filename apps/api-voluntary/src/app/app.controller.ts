import { VoluntaryModelB } from './voluntary.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller('volunteers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll() {
    return this.appService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: number): Promise<VoluntaryModelB> {
    return this.appService.getById(id);
  }

  @Post()
  async create(@Body() voluntary: VoluntaryModelB): Promise<VoluntaryModelB> {
    return this.appService.create(voluntary);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() voluntary: VoluntaryModelB
  ): Promise<VoluntaryModelB> {
    voluntary.id = id;
    return this.appService.update(voluntary);
  }

  @Delete(':id')
  async Delete(@Param('id') id: number) {
    return this.appService.delete(id);
  }
}
