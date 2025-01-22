import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'heroes-search-views',
  templateUrl: './heroes-search-views.component.html',
  styles: ``,
})
export class HeroesSearchViewsComponent {

  public searchInput = new FormControl(''); //Creamos un FormControl para el input de busqueda
  public heroes: Hero[] = []; //Creamos un array de heroes vacio, recibira los heroes que nos devuelva el servicio
  public selectedHero?: Hero;

  constructor(
    private heroesService: HeroesService, //Inyectamos el servicio de heroes
  ){}

  searchHero(){
    const filteredOptions: string = this.searchInput.value || ''; //Obtenemos el valor del input de busqueda si no hay valor asignamos un string vacio
    this.heroesService.getSuggestions(filteredOptions) //Llamamos al servicio de getSuggestions y le pasamos el valor del input
      .subscribe( heroes => this.heroes = heroes); //Nos suscribimos al observable y asignamos el resultado al array de heroes
      console.log(this.heroes);
  }

  //matAutocompleteSelectedEvent es un evento que se dispara cuando se selecciona una opcion del autocomplete de angular material
  onSelectedOption( event: MatAutocompleteSelectedEvent ): void { //Metodo que se ejecuta cuando se selecciona una opcion del autocomplete
    if ( !event.option.value ) { //Si no hay valor en el evento retornamos
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value; //Obtenemos el valor de la opcion seleccionada
    this.searchInput.setValue( hero.superhero ); //Seteamos el valor del input con el nombre del heroe seleccionado
    this.selectedHero = hero; //Asignamos el heroe seleccionado a la variable selected
  }

}
