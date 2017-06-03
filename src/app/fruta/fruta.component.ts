import { Component } from '@angular/core'

@Component({
    selector: 'fruta',
    templateUrl : './fruta.component.html'

})
export class FrutaComponent{
    public nombre_componente = 'Componente Fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    //Definiendo Tipos de Datos en TypeScript
    public TrueFalse:boolean = true;
    public Texto:string = 'FernandoAmezcua';
    public edad:number = 100;
    public trabajos:Array<string> = ['Carpintero','plomero','chofer']

} 