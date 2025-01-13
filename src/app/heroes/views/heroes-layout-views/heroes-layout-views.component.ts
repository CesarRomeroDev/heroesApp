import { Component } from '@angular/core';

@Component({
  selector: 'heroes-layout-views',
  templateUrl: './heroes-layout-views.component.html',
  styles: ``
})
export class HeroesLayoutViewsComponent {

  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list'
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: './new-hero'
    },
    {label: 'Buscar',
      icon: 'search',
      url: './search'
    }
  ];

}
