import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environments';

@Injectable({providedIn: 'root'})

export class HeroesService {

  private baseUrl: string = environment.baseUrl; //variable que contiene la url de la API

  constructor(
    private http: HttpClient //Iportamos el modulo provideHttpClient() a app.module.ts
  ) { }

  //Servicios para obtener todos los heroes
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

  //Servicio para obtener un heroe por su id
  getHeroById( id: string ): Observable<Hero | undefined>{ //puede venir un heroe o un undefined
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError( error => of(undefined))
    )
  }

  //Servicio para obtener sugerencias de heroes.
  getSuggestions( query: string ): Observable<Hero[]>{ //Recibe un string y retorna un observable de tipo Hero[]
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`) //limitamos la cantidad de heroes a 6 para no saturar la vista
  }

}
