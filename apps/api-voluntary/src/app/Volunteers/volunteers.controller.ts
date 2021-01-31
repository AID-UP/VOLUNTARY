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
import { VoluntaryModel } from 'libs/data/src/lib/data';
import { Voluntary } from '../shared/voluntary';

import { VolunteersService } from './volunteers.service';

@Controller('volunteers')
export class VolunteersController {
  constructor(private readonly volunteersService: VolunteersService) {}

  @Get()
  async getAll(): Promise<Voluntary[]> {
    return this.volunteersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Voluntary> {
    return this.volunteersService.getById(id);
  }

  @Post()
  async create(@Body() voluntary: Voluntary): Promise<Voluntary> {
    return this.volunteersService.create(voluntary);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() voluntary: Voluntary
  ): Promise<Voluntary> {
    return this.volunteersService.update(id, voluntary);
  }

  @Delete(':id')
  async Delete(@Param('id') id: string) {
    return this.volunteersService.delete(id);
  }

  // @Get('voluntary')
  // async findName(@Query() termo: string) {
  //   this.volunteersService.findName(termo);
  // }
}
