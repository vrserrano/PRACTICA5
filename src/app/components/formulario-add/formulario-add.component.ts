import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicioFormularioService } from 'src/app/services/servicio-formulario.service';
import { Persona } from '../../models/persona.model'; // se importa el modelo de datos de persona
import { Router } from '@angular/router';

@Component({
	selector: 'app-formulario-add',
	templateUrl: './formulario-add.component.html',
	styleUrls: ['./formulario-add.component.css']
})

export class FormularioAddComponent implements OnInit {
	personaFormulario: FormGroup;
	sexos: string[] = ['Hombre', 'Mujer', 'Otro', 'No definido'];

	ngOnInit() {
		this.formValidations();
	}
	constructor(
		public fb: FormBuilder,
		private servicioFormulario: ServicioFormularioService, // se vincula el servicio con el componente
		private router: Router
	) { }

	formValidations() {
		this.personaFormulario = this.fb.group({
			nombre_persona: ['', [Validators.required, Validators.minLength(3)]],
			apellidos_persona: ['', [Validators.required, Validators.minLength(3)]],
			edad_persona: ['', [Validators.required, Validators.maxLength(3), Validators.max(125), Validators.min(0)]],
			dni_persona: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
			cumpleanos_persona: ['', [Validators.required]],
			color_persona: ['', [Validators.required, Validators.minLength(3)]],
			sexo_persona: ['', [Validators.required]]
		})
	}

	addPersona() {
		this.servicioFormulario.setNuevoContacto(new Persona(
			this.personaFormulario.get("nombre_persona").value,
			this.personaFormulario.get("apellidos_persona").value,
			this.personaFormulario.get("edad_persona").value,
			this.personaFormulario.get("dni_persona").value,
			this.personaFormulario.get("cumpleanos_persona").value,
			this.personaFormulario.get("color_persona").value,
			this.personaFormulario.get("sexo_persona").value,
		));
		this.router.navigateByUrl('')
	}
}


