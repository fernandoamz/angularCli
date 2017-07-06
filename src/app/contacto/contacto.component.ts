import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo = "Pagina Contacto";
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        //Funcion de Tipo Flecha, funciona igual que los callbacks en js
        this._route.params.forEach((params: Params)=>{
            this.parametro = params['page'];
        });
    }

    redirigir(){
        this._router.navigate(['/contacto','Fernando Amezcua']);
    }
    redirigirDos(){
        this._router.navigate(['/pagina-principal']);
    }
}