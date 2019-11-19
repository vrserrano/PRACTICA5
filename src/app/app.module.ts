import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormularioEditComponent } from './components/formulario-edit/formulario-edit.component';
import { FormularioAddComponent } from './components/formulario-add/formulario-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormularioEditComponent,
    FormularioAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
