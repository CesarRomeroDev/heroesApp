import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutViewsComponent } from './views/auth-layout-views/auth-layout-views.component';
import { AuthLoginViewsComponent } from './views/auth-login-views/auth-login-views.component';
import { AuthRegisterViewsComponent } from './views/auth-register-views/auth-register-views.component';

const routes: Routes = [
  {
    path: '', //route father
    component: AuthLayoutViewsComponent,
    children: [
      { path: 'login', component: AuthLoginViewsComponent },
      { path: 'new-account', component: AuthRegisterViewsComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild( routes ),],
  exports: [ RouterModule,],

})
export class AuthRoutingModule { }
