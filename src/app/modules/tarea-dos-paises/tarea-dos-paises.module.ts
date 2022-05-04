import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaDosPaisesRoutingModule } from './tarea-dos-paises-routing.module';
import { TareaDosPaisesComponent } from './tarea-dos-paises.component';


@NgModule({
  declarations: [
    TareaDosPaisesComponent
  ],
  imports: [
    CommonModule,
    TareaDosPaisesRoutingModule
  ]
})
export class TareaDosPaisesModule { }
