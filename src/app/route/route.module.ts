import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from  '@angular/router';
import { AppComponent } from '../app.component';
import { MecanicosComponent } from '../mecanicos/mecanicos.component';
import { MantenimientosComponent } from '../mantenimientos/mantenimientos.component';

const routes: Routes = [
  {path: 'home',component:AppComponent},
  {path:'mecanicos', component:MecanicosComponent},
  {path:'mantenimientos', component:MantenimientosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RouteModule { }
