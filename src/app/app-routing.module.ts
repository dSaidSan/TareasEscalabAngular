import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'tareaUno', loadChildren: () => import('./modules/tarea-uno/tarea-uno.module').then(m => m.TareaUnoModule) }, { path: 'tareaDosGot', loadChildren: () => import('./modules/tarea-dos-got/tarea-dos-got.module').then(m => m.TareaDosGotModule) }, { path: 'tareaDosPaises', loadChildren: () => import('./modules/tarea-dos-paises/tarea-dos-paises.module').then(m => m.TareaDosPaisesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
