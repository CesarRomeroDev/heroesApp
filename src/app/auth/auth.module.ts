import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module'; // Import MaterialModule Angular Material


import { AuthLayoutViewsComponent } from './views/auth-layout-views/auth-layout-views.component';
import { AuthLoginViewsComponent } from './views/auth-login-views/auth-login-views.component';
import { AuthRegisterViewsComponent } from './views/auth-register-views/auth-register-views.component';



@NgModule({
  declarations: [
    AuthLayoutViewsComponent,
    AuthLoginViewsComponent,
    AuthRegisterViewsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
