import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SuccessfulComponent } from './successful/successful.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'successful', component: SuccessfulComponent},
  {path:'customerCart', component: CustomerCartComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
