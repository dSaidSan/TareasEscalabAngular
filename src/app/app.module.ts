import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponenteAComponent } from './components/tareaUno/componente-a/componente-a.component';
import { ComponenteBComponent } from './components/tareaUno/componente-b/componente-b.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComponenteAComponent,
    ComponenteBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
