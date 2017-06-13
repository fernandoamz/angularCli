import { Component } from '@angular/core';
import { Empleado } from './empleados';

@Component({
    selector: 'empleados',
    templateUrl: './empleados.component.html'
})

export class InformacionEmpleado{
    //public nombre_empleado = 'Carlos, Fernando,Pedro,Salo';
   // public puesto_trabajador = 'jrDev, SrDev, ninjaDev, FullStackDev';  
   public empleado:Empleado;
   public trabajadores:Array<Empleado>;
   public trabajadorExterno:boolean;
   public color:string;
   public colorSeleccionado:string;

   constructor(){
    this.empleado = new Empleado('Fernando Amezcua', 23,'jrDev',false);
    this.trabajadores = [
         new Empleado('Fernando Amezcua', 23,'jrDev',true),
         new Empleado('Juan ramirez', 24,'srDev',true),
         new Empleado('Pedro Nuez', 26,'NinjaDev',true)
    ];
    
    this.trabajadorExterno = true;
    this.color = 'green';
    this.colorSeleccionado = '#ccc';

    }
   
   ngOnInit(){  
    //console.log(this.empleado);
    //console.log(this.trabajadores);
   }

   cambiarExterno(valor){
    this.trabajadorExterno = valor; 
   }

   logColorSeleccionado(){
       console.log(this.colorSeleccionado);
   }
}