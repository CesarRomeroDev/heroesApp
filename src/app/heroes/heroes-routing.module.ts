import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesLayoutViewsComponent } from './views/heroes-layout-views/heroes-layout-views.component';
import { HeroesNewViewsComponent } from './views/heroes-new-views/heroes-new-views.component';
import { HeroesSearchViewsComponent } from './views/heroes-search-views/heroes-search-views.component';
import { HeroesListViewsComponent } from './views/heroes-list-views/heroes-list-views.component';
import { HeroesHeroViewsComponent } from './views/heroes-hero-views/heroes-hero-views.component';

const routes: Routes = [
  {
    path: '', //route father
    component: HeroesLayoutViewsComponent,
    children: [
      { path: 'new-hero', component: HeroesNewViewsComponent },
      { path: 'search', component: HeroesSearchViewsComponent },
      { path: 'edit/:id', component: HeroesNewViewsComponent },
      { path: 'list', component: HeroesListViewsComponent },
      { path: ':id', component: HeroesHeroViewsComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
