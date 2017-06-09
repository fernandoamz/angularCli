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
    public trabajos:Array<string> = ['Carpintero','plomero','chofer'];
    
    //el Tipo de variable any es capaz de guardar cualquier cosa 
    public comodin:any = 'cualquier cosa';

    constructor(){
        
        this.Texto = 'Fernando Amezcua';
        this.edad = 25;
        this.TrueFalse = true;
        this.comodin = 'lo que sea dos';
        //this.holaMundo();

        //ejemplo de console
        //console.log(this.comodin);
        //console.log(this.trabajos);
    }

    ngOnInit(){
        this.cambiarNombre();
        //alert(this.Texto);
        this.cambiarEdad(24);
        //alert("Mi edad es: " + " " + this.edad);

        // Variables y Alcance 

        var uno = 8;
        var dos = 20;

        if(uno === 8){
            // La diferiencia de let y var es el alcance 
            // let, solo altera la variable dentro de este bloque de codigo
            // var, altera el contenido de manera global
            
            let uno = 3;
            var dos = 99;
            console.log("Dentro del IF" + " " + uno);
        }
          console.log("Fuera del IF" + " " + uno);
    }

    holaMundo(){
        alert("Hola Mundo" + " " + this.Texto);
    }

    cambiarNombre(){
        this.Texto = 'Logitesh';
    }

    cambiarEdad(edad){
        this.edad = edad;
    }
} 