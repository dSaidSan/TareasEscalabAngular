import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaUnoComponent } from './tarea-uno.component';

const routes: Routes = [{ path: '', component: TareaUnoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaUnoRoutingModule { }
