import { Component } from '@angular/core';

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html',
})

export class PlantillasComponent{
    public titulo; 
    public administrador; 

    public dato_externo = "Fernando Amezcua Alcantar";
    public identity = {
        id: 1,
        web: 'FernandoAmezcua.com',
        tematica: 'WebDevApp'
    };


    constructor(){
        this.titulo = "Plantillas ngTemplate en Angular";
        this.administrador = true;
    }

    cambiar(value){
        this.administrador = value;
    }

    public datos_del_hijo;

    recibirDatos(event){
        console.log(event);
        this.datos_del_hijo = event;
    }
}