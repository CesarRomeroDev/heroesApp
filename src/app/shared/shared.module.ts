import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedError404ViewsComponent } from './views/shared-error404-views/shared-error404-views.component';



@NgModule({
  declarations: [
    SharedError404ViewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedError404ViewsComponent
  ]
})
export class SharedModule { }
