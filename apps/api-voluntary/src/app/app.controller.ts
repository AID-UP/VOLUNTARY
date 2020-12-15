import { VoluntaryModel } from './../../../../libs/data/src/lib/data';


import {
  All,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller('volunteers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll() {
    return this.appService.getAll();
  }

  @Get('voluntary')
  async findName(@Query() termo: string) {
  this.appService.findName(termo);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<VoluntaryModel> {
    return this.appService.getById(id)
  }

  @Post()
  async create(@Body() voluntary: VoluntaryModel): Promise<VoluntaryModel> {
    return this.appService.create(voluntary);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() voluntary: VoluntaryModel
  ): Promise<VoluntaryModel> {
    voluntary.id = id;
    return this.appService.update(voluntary);
  }

  @Delete(':id')
  async Delete(@Param('id') id: number) {
    return this.appService.delete(id);
  }
}
