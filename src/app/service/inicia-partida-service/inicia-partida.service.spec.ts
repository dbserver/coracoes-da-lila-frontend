import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { IniciaPartidaService } from './inicia-partida.service';

describe(`#${IniciaPartidaService.name}`, () => {
  let iniciaPartidaService: IniciaPartidaService;
  let httpMock: HttpTestingController;

  const MockItem = {
    jogadores: ['andre', 'gabriel'],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IniciaPartidaService],
    });

    iniciaPartidaService = TestBed.get(IniciaPartidaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`#${IniciaPartidaService.prototype.getQuantidadeJogadores.name}
  deve retorna quantidade de jogadores`, () => {
    iniciaPartidaService
      .getQuantidadeJogadores('q1w2e3r4t5')
      .subscribe((response: any) => {
        expect(response[0].jogadores.length).toEqual(2);
      });
    const httpRequest = httpMock.expectOne(
      'http://localhost:8080/sala/numeroJogadores/q1w2e3r4t5'
    );

    expect(httpRequest.request.method).toEqual('GET');
    expect(httpRequest.request.responseType).toEqual('json');

    httpRequest.flush([MockItem]);
  });
});
