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
        this._route.params.forEach(function(params: Params){
            this.parametro = params['page'];
        });
    }

}