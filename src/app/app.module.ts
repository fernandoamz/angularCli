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
import { CochesComponent } from './coches/coches.component';
import { ConversorPipe } from './pipes/conversor.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  // aqui va todo lo que tiene que ver con directivas, pipes y componentes 
  declarations: [
    AppComponent,
    FrutaComponent,
    InformacionEmpleado,
    HomeComponent,
    ContactoComponent, 
    ConversorPipe,
    CochesComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
