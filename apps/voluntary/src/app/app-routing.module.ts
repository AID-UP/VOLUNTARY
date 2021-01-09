import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MypageComponent } from './mypage/mypage.component';
import { Erro404Component } from './erro404/erro404.component';
import { FormCadComponent } from './app-forms/form-cad/form-cad.component';
import { FiltrosComponent } from './app-forms/filtros/filtros.component';
import { FormCadVolunteersResolverGuard } from './app-forms/guards/form-cad-volunteers-resolver.guard';
import { LoginComponent } from './app-forms/login/login.component';
import { ListVolunteersComponent } from './ListVolunteers/ListVolunteers.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
        { path: 'Dashboard', component: MainComponent },
        { path: 'LoginUser', component: LoginComponent },
        { path: 'ListVolunteers', component: ListVolunteersComponent },
        {
          path: 'voluntary/:id',
          component: MypageComponent,
          resolve: {
            voluntary: FormCadVolunteersResolverGuard,
          },
        },
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
        { path: 'filtros', component: FiltrosComponent },
        { path: '**', component: Erro404Component },
      ],
      { relativeLinkResolution: 'legacy' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
