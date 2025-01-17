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

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

  getHeroById( id: string ): Observable<Hero | undefined>{ //puede venir un heroe o un undefined
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError( error => of(undefined))
    )
  }

}
