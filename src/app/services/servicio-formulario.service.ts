import { Injectable, OnInit } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable({
	providedIn: 'root'
})

export class ServicioFormularioService {
	public arrayContactos: Persona[] = [];
	private contactoEditar;

	constructor() {
	}

	getContactos(): Persona[] {
		return this.arrayContactos
	}

	setNuevoContacto(persona: Persona): void {
		this.arrayContactos.push(persona);
	}

	editarContacto(persona: Persona): void {
		this.arrayContactos[this.contactoEditar].setNombre = persona.nombrePersona;
		this.arrayContactos[this.contactoEditar].setApellidos = persona.apellidosPersona;
		this.arrayContactos[this.contactoEditar].setEdad = persona.edadPersona;
		this.arrayContactos[this.contactoEditar].setDni = persona.dniPersona;
		this.arrayContactos[this.contactoEditar].setCumpleaños = persona.cumpleanosPersona;
		this.arrayContactos[this.contactoEditar].setColorFavorito = persona.colorFavoritoPersona;
		this.arrayContactos[this.contactoEditar].setSexo = persona.sexoPersona;
	}

	setContactoEditar(index): void {
		this.contactoEditar = index
	}

	getContactoEditar(): Persona {
		return this.arrayContactos[this.contactoEditar]
	}
}
