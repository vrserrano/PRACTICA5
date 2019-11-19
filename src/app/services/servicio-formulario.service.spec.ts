import { TestBed } from '@angular/core/testing';

import { ServicioFormularioService } from './servicio-formulario.service';

describe('ServicioFormularioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioFormularioService = TestBed.get(ServicioFormularioService);
    expect(service).toBeTruthy();
  });
});
