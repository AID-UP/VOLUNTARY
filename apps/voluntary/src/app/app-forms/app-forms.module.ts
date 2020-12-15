import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCadComponent } from 'src/app/app-forms/form-cad/form-cad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { FiltrosComponent } from './filtros/filtros.component';
import { DataIdadePipe } from '../pipes/data-idade.pipe';

@NgModule({
  declarations: [FiltrosComponent, FormCadComponent, DataIdadePipe],
  imports: [CommonModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  exports: [FiltrosComponent, FormCadComponent, DataIdadePipe],
})
export class AppFormsModule {}
