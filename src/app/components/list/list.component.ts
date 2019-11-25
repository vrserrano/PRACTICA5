import { Component, ViewChild, OnInit } from '@angular/core';
import { ServicioFormularioService } from 'src/app/services/servicio-formulario.service';
import { Persona } from '../../models/persona.model'; // se importa el modelo de datos de persona
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	private arrayContactos: any = [];
	datosContactos: MatTableDataSource<Persona>;
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	columnas: string[] = ['nombreContacto', 'apellidosContacto', 'edadContacto', 'dniContacto', 'cumpleanosContacto', 'colorFavoritoContacto', 'sexoContacto', 'editar', 'eliminar'];

	constructor(
		private servicioFormulario: ServicioFormularioService  // se vincula el servicio con el componente
	) { 
		this.arrayContactos = this.servicioFormulario.getContactos()
		this.datosContactos = new MatTableDataSource<Persona>(this.arrayContactos);
	}

	ngOnInit() {
	}

	eliminarContacto(index) {
		this.arrayContactos.splice(index, 1);
		this.datosContactos = new MatTableDataSource<Persona>(this.arrayContactos);
	}

	editarContacto(index) {
		this.servicioFormulario.setContactoEditar(index)
	}
}
