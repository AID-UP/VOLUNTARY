import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Erro404Component } from '../erro404/erro404.component';
import { FormCadVolunteersResolverGuard } from '../guards/form-cad-volunteers-resolver.guard';
import { FiltrosComponent } from './volunteersForm/filtros/filtros.component';
import { FormCadComponent } from './volunteersForm/form-cad/form-cad.component';



const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
 
      {
        path: 'formulario',
        component: FormCadComponent,
        resolve: {
          voluntary: FormCadVolunteersResolverGuard,
        },
      },
      {
        path: 'formulario/:id',
        component: FormCadComponent,
        resolve: {
          voluntary: FormCadVolunteersResolverGuard,
        },
      },
      { path: 'filtros', component: FiltrosComponent }
      
    ]),
  ],
  exports: [RouterModule],
})
export class AppFormsRoutingModule {}
