import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; //Angular Material

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    SharedModule,  //carpeta Shared
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient() //peticiones http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
