import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCadVolunteersResolverGuard } from '../guards/form-cad-volunteers-resolver.guard';
import { ListVolunteersComponent } from './listVolunteers/listVolunteers.component';
import { MypageComponent } from './mypage/mypage.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'listVolunteers', component: ListVolunteersComponent },
      {
        path: 'voluntary/:id',
        component: MypageComponent,
        resolve: {
          voluntary: FormCadVolunteersResolverGuard,
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class VolunteersRoutingModule {}
