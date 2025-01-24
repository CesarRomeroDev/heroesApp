import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'heroes-list-views',
  templateUrl: './heroes-list-views.component.html',
  styles: ``
})
export class HeroesListViewsComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes = heroes)
  }

}
