import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicioFormularioService } from 'src/app/services/servicio-formulario.service';
import { Persona } from '../../models/persona.model'; // se importa el modelo de datos de persona

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.css']
})
export class FormularioEditComponent implements OnInit {
  private contactoEditar: any;
  contactoFormulario: FormGroup;
  sexos: string[] = ['Hombre', 'Mujer', 'Otro', 'No definido'];

  ngOnInit() {
    this.formValidations();
  }

  constructor(
    public fb: FormBuilder,
    private servicioFormulario: ServicioFormularioService  // se vincula el servicio con el componente
  ) {
    this.contactoEditar = this.servicioFormulario.getContactoEditar()
  }

  formValidations() {
    if (this.contactoEditar != undefined) {
      this.contactoFormulario = this.fb.group({
        nombre_contacto: [this.contactoEditar.nombrePersona, [Validators.required, Validators.minLength(3)]],
        apellidos_contacto: [this.contactoEditar.apellidosPersona, [Validators.required, Validators.minLength(3)]],
        edad_contacto: [this.contactoEditar.edadPersona, [Validators.required, Validators.maxLength(3), Validators.max(125), Validators.min(0)]],
        dni_contacto: [this.contactoEditar.dniPersona, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
        cumpleanos_contacto: [this.contactoEditar.cumpleanosPersona, [Validators.required]],
        color_contacto: [this.contactoEditar.colorFavoritoPersona, [Validators.required, Validators.minLength(3)]],
        sexo_contacto: [this.contactoEditar.sexoPersona, [Validators.required]],
      })
    }
  }

  editarContacto() {
    this.servicioFormulario.editarContacto(new Persona(
      this.contactoFormulario.get("nombre_contacto").value,
      this.contactoFormulario.get("apellidos_contacto").value,
      this.contactoFormulario.get("edad_contacto").value,
      this.contactoFormulario.get("dni_contacto").value,
      this.contactoFormulario.get("cumpleanos_contacto").value,
      this.contactoFormulario.get("color_contacto").value,
      this.contactoFormulario.get("sexo_contacto").value,
    ));
  }
}
