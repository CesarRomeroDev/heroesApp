import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-views',
  templateUrl: './heroes-hero-views.component.html',
  styles: ``
})
export class HeroesHeroViewsComponent implements OnInit {

  public hero?: Hero; //variable que contendra el heroe; el signo de interrogacion indica que puede ser undefined.

  constructor(
    private heroesServices: HeroesService,
    private activatedRoute: ActivatedRoute,  //para obtener el id de la url
    private router: Router //para redirigir a una ruta
  ){}
  ngOnInit(): void {
    this.activatedRoute.params //params es un observable que obtiene los parametros de la url
    .pipe(  //pipe es un operador que permite realizar operaciones con los datos que emite el observable
        delay( 100 ), //delay es un operador que permite retrasar la emision de los datos
        switchMap( ( {id} ) => this.heroesServices.getHeroById( id ) ), //switchMap permite cambiar el observable que se esta emitiendo, por ejemplo cambiamos el observable params por el observable getHeroById
      ).subscribe( hero => {
        if( !hero ) return  this.router.navigate( [ '/heroes/list' ] ); //si no existe el heroe redirigimos a la lista de heroes
        this.hero = hero;   //si existe el heroe lo asignamos a la variable hero
        return;
      })
  }

  goBack(): void{
    this.router.navigateByUrl( '/heroes/list' ); //redirigimos a la lista de heroes
  }

}
