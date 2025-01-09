import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedError404ViewsComponent } from './shared/views/shared-error404-views/shared-error404-views.component';

const routes: Routes = [
  {
    path: 'auth', //name of route primary
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), //load children auth module
  },
  {
    path: 'heroes', //name of route primary
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule), //load children heroes module
  },
  {
    path: '404', //route 404 not found(encontrada)
    component: SharedError404ViewsComponent, //no load children. direct component
  },
  {
    path: '', //if the route is empty(vacia), redirect to heroes
    redirectTo: 'heroes', //redirect to heroes
    pathMatch: 'full',
  },
  {
    path: '**', //if the route is not found, redirect to 404
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
