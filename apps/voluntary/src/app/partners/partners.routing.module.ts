import { MyPagePartnersComponent } from './myPagePartners/myPagePartners.component';
import { ListPartnersComponent } from './listPartners/listPartners.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'listPartners', component: ListPartnersComponent },
      {
        path: 'myPagePartners/:id',
        component: MyPagePartnersComponent,
        resolve: {
          // voluntary: FormCadVolunteersResolverGuard,
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PartnersRoutingModule {}
