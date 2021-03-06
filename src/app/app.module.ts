import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormularioEditComponent } from './components/formulario-edit/formulario-edit.component';
import { FormularioAddComponent } from './components/formulario-add/formulario-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioFormularioService } from './services/servicio-formulario.service';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormularioEditComponent,
    FormularioAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ServicioFormularioService,
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'} // esto se usa para que la fecha en el calendario salga como dd/mm/aaaa
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
