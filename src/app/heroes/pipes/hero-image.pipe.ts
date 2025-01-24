import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform( hero: Hero ): string {  //Transformación de la imagen del héroe va ser de tipo Hero y va a retornar un string
    if( !hero.id && !hero.alt_img ) { //Si no hay id y no hay alt_img (imagen alternativa)
      return 'assets/no-image.png'; //Retornar la imagen no-image.png
    }

    if( hero.alt_img) return hero.alt_img;  //Si hay una imagen alternativa, retornar la imagen alternativa

    return `assets/heroes/${ hero.id }.jpg` //an que no haya id ni imagen alternativa, retorna la imagen del héroe con el id como url;
  }

}
