import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Sala } from '../../model/sala';
import { IniciaPartidaService } from './inicia-partida.service';
import { JogadorService } from './../jogador-service/jogador.service';

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
    .subscribe((response:number)=>{
        expect(response.toFixed(2)).toEqual('2');
    });
   const httpRequest = httpMock.expectOne('http://localhost:8080/sala/numeroJogadores/q1w2e3r4t5');

   expect(httpRequest.request.method).toEqual('GET');
   expect(httpRequest.request.responseType).toEqual('json');

   httpRequest.flush([MockItem]);
  });
})