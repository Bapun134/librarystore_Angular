import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { HomeComponent } from './home/home.component';
import { SuccessfulComponent } from './successful/successful.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserServiceService } from './user-service.service';
import { AdminServiceService } from './admin-service.service';

@NgModule({
  
  declarations: [ AppComponent, AdminComponent, CustomerCartComponent, HomeComponent, SuccessfulComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserServiceService,AdminServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }

