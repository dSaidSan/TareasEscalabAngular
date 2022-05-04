import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaDosGotComponent } from './tarea-dos-got.component';

const routes: Routes = [{ path: '', component: TareaDosGotComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaDosGotRoutingModule { }
