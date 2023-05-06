import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PaquetesComponent } from './paquetes.component';

const routes: Routes = [
  {
    path: '',
    component: PaquetesComponent,
    // canActivate: [AuthGuard],
    pathMatch: 'prefix'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaquetesRoutingModule { }
