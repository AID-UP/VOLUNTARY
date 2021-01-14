import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { FiltrosComponent } from './volunteersForm/filtros/filtros.component';
import { FormCadComponent } from './volunteersForm/form-cad/form-cad.component';



@NgModule({
  imports: [CommonModule, FormsModule, AppRoutingModule, ReactiveFormsModule, PipesModule],

  declarations: [FiltrosComponent, FormCadComponent],

  exports: [FiltrosComponent, FormCadComponent],
})
export class AppFormsModule {}
