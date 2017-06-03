import { Component } from '@angular/core';

@Component({
    selector: 'empleados',
    templateUrl: 'empleados.component.html'
})

export class InformacionEmpleado{
    public nombre_empleado = 'Carlos, Fernando,Pedro,Salo';
    public puesto_trabajador = 'jrDev, SrDev, ninjaDev, FullStackDev';  
}