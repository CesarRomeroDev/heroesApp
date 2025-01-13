import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HeroesHeroViewsComponent } from './views/heroes-hero-views/heroes-hero-views.component';
import { HeroesLayoutViewsComponent } from './views/heroes-layout-views/heroes-layout-views.component';
import { HeroesListViewsComponent } from './views/heroes-list-views/heroes-list-views.component';
import { HeroesNewViewsComponent } from './views/heroes-new-views/heroes-new-views.component';
import { HeroesSearchViewsComponent } from './views/heroes-search-views/heroes-search-views.component';

@NgModule({
  declarations: [

    HeroesHeroViewsComponent,
    HeroesLayoutViewsComponent,
    HeroesListViewsComponent,
    HeroesNewViewsComponent,
    HeroesSearchViewsComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
  ]
})
export class HeroesModule { }
