import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { InformacionEmpleado } from './empleados/empleados.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FrutaComponent,
    InformacionEmpleado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
