import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service'; 

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [ PeticionesService ]
})

export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;
    public articulos;
    
    constructor(
        private _peticionesService: PeticionesService
    ){
        this.coche = new Coche("","","");
        this.coches = [
             new Coche("Nissan","123","blanco"),
             new Coche("Toyota","1113","Azul")
        ];
    }

    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result => {
                console.log(result);
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }
    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
}