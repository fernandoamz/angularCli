import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'componente-hijo',
	template: `
	
	<p> Este es el componente {{title}} </p>
	
	<ul>
		<li>{{propiedad_uno}}</li>
		<li>{{propiedad_dos.web}}</li>
	</ul>


	<button (click)="enviar()">Enviar Datos al Padre </button>

	`

})

export class HijoComponent{
	public title: string; 

	@Input('texto1') propiedad_uno: string;
	@Input('texto2') propiedad_dos: string;

	@Output() desde_el_hijo = new EventEmitter();

	constructor(){
		this.title = "Hijo"
	}

	ngOnInit(){
		console.log(this.propiedad_uno);
		console.log(this.propiedad_dos);
		this.enviar();
	}

	enviar(){
		this.desde_el_hijo.emit({
			 nombre: 'Fernando Amezcuaaa Web',
			 web: 'Fernando.com',
			 twitter: 'fernandoamz'
		});
	}
}