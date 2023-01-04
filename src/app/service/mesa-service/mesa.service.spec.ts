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

  it('Deve adicionar uma Key "esconder" com o Value "true" no localStorage', () => {
    service.esconderBotaoFonteMaior()
    expect(localStorage.getItem('esconder')).toEqual('true')
  });

  it('deve remover a Key "esconder" do localStorage', () => {
    service.mostrarBotaoFonteMaior()
    expect(localStorage.getItem('esconder')).toEqual(null)
  });
});
