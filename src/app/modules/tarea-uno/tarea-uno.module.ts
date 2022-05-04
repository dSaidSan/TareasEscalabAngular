import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaUnoRoutingModule } from './tarea-uno-routing.module';
import { TareaUnoComponent } from './tarea-uno.component';
import { ComponenteAComponent } from 'src/app/components/tareaUno/componente-a/componente-a.component';
import { ComponenteBComponent } from 'src/app/components/tareaUno/componente-b/componente-b.component';


@NgModule({
  declarations: [
    TareaUnoComponent,
    ComponenteAComponent,
    ComponenteBComponent
  ],
  imports: [
    CommonModule,
    TareaUnoRoutingModule
  ]
})
export class TareaUnoModule { }
