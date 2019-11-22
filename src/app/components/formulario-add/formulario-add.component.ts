import { Component, OnInit, ViewChild, NgZone, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Subject {
  personaNombre: string;
}

@Component({
  selector: 'app-formulario-add',
  templateUrl: './formulario-add.component.html',
  styleUrls: ['./formulario-add.component.css']
})
export class FormularioAddComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  personaFormulario: FormGroup;
  subjectArray: Subject[] = [];

  ngOnInit() {
    this.submitForm();
  }
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,

  ) { }

  /* Reactive book form */
  submitForm() {
    this.personaFormulario = this.fb.group({
      nombre_persona: ['', [Validators.required]],
      apellidos_persona: ['', [Validators.required]],
      edad_persona: ['', [Validators.required]],
      dni_persona: ['', [Validators.required]],
      cumpleaños_persona: ['', [Validators.required]],
      color_persona: ['', [Validators.required]],
      sexo_persona: ['', [Validators.required]]

    })
    function validarRango(elemento){
      var numero = parseInt(elemento.value,10);
      //Validamos que se haya ingresado solo numeros
      if(isNaN(numero)){
        alert('Ingrese solo números.');
        elemento.focus();
        elemento.select();
        return false;
      }
      //Validamos que se cumpla el rango
      if(numero<0 || numero>125){
        alert('Solo se permite el siguiente rango: 0 - 125');
        elemento.focus();
        return false;
      }
      return true;
    }
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.personaFormulario.controls[controlName].hasError(errorName);
  }


}


