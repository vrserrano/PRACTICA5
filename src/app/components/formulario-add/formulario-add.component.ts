import { Component, OnInit, ViewChild, NgZone, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Subject {
  personName: string;
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
  personForm: FormGroup;
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
    this.personForm = this.fb.group({
      person_name: ['', [Validators.required]],
      person_surname: ['', [Validators.required]],
      person_age: ['', [Validators.required]],
      person_id: ['', [Validators.required]],
      person_birthday: ['', [Validators.required]],
      person_color: ['', [Validators.required]],
      person_sexo: ['', [Validators.required]]

    })

  }
  public handleError = (controlName: string, errorName: string) => {
    return this.personForm.controls[controlName].hasError(errorName);
  }


}


