import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';

import {RouteModule} from  './route/route.module';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MecanicosComponent,
    MantenimientosComponent,
    MenuComponent  ],
  imports: [
    BrowserModule,
    RouteModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
