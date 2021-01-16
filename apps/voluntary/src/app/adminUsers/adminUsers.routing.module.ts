import { MyPageAdminUsersComponent } from './myPageAdminUsers/myPageAdminUsers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAdminUsersComponent } from './listAdminUsers/listAdminUsers.component';



const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'listAdminUsers', component: ListAdminUsersComponent },
      {
        path: 'myPageAdminUsers/:id',
        component: MyPageAdminUsersComponent,
        resolve: {
          // voluntary: FormCadVolunteersResolverGuard,
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AdminUsersRoutingModule {}
