import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';

import { VoluntaryService } from './services/voluntary.service';
import { MypageComponent } from './mypage/mypage.component';
import { ListVolunteersComponent } from './listVolunteers/listVolunteers.component';

@NgModule({
  imports: [CommonModule, RouterModule,  PipesModule],
  declarations: [ListVolunteersComponent, MypageComponent, ],
  providers: [VoluntaryService],
})
export class VolunteersModule {}
