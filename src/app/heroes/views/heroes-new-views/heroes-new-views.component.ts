import { Component } from '@angular/core';

@Component({
  selector: 'heroes-new-views',
  templateUrl: './heroes-new-views.component.html',
  styles: ``
})
export class HeroesNewViewsComponent {

  public publishers = [ // Array de objetos
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ]

}
