import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { InformacionEmpleado } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    FrutaComponent,
    InformacionEmpleado,
    HomeComponent,
    ContactoComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
