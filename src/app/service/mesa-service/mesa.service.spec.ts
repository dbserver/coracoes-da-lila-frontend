import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MesaService } from './mesa.service';

describe('MesaService', () => {
  let service: MesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve adicionar uma Key e um Value no localStorage', () => {
    expect(service.esconderBotaoFonteMaior()).toBeTruthy
  });

  it('deve remover uma Key do localStorage', () => {
    expect(service.mostrarBotaoFonteMaior()).toBeTruthy
  });
});
