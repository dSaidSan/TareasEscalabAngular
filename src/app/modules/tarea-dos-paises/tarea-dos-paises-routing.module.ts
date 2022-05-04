import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaDosPaisesComponent } from './tarea-dos-paises.component';

const routes: Routes = [{ path: '', component: TareaDosPaisesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaDosPaisesRoutingModule { }
