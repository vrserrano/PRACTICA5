import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFormularioService {

  constructor() { 
    console.log("Servicio listo para usar!");
  }
}
