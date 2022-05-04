import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaDosGotRoutingModule } from './tarea-dos-got-routing.module';
import { TareaDosGotComponent } from './tarea-dos-got.component';


@NgModule({
  declarations: [
    TareaDosGotComponent
  ],
  imports: [
    CommonModule,
    TareaDosGotRoutingModule
  ]
})
export class TareaDosGotModule { }
