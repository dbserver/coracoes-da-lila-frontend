import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NovaCategoriaCartasDoJogoDTO } from 'src/app/dto/NovaCategoriaCartasDoJogoDTO';
import { NovaCategoriaDTO } from 'src/app/dto/NovaCategoriaDTO';
import { Baralho } from 'src/app/model/baralho';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { environment } from 'src/environments/environment';

import { MesaJogoService } from './mesa-jogo.service';

describe('MesaJogoService', () => {
  let httpTestingController: HttpTestingController;
  let service: MesaJogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MesaJogoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('enviaJogadorParaFinalizar() testando requisição com caminho feliz', () => {

    //Criando mocks para fazer a requisição
    const novaCategoriaDTO1: NovaCategoriaDTO = {} as NovaCategoriaDTO;
    const novaCategoriaDTO2: NovaCategoriaDTO = {} as NovaCategoriaDTO;

    const novaCategoriaCartasDoJogoDTO: NovaCategoriaCartasDoJogoDTO = {
      salaHash: 'hash',
      listaDeCartas: [novaCategoriaDTO1, novaCategoriaDTO2]
    }

    const testeURL = `${environment.API_URL+'api/jogada/finalizastatusjogador'}`;

    //Mockando sala que retornará da requisição
    const resultadoEsperado: Sala = {
      id: 'id',
      hash: '',
      cartasObjetivo: [],
      opcoesCartaObjetivo: [],
      cartaObjetivoEscolhida: {} as CartaObjetivo,
      baralho: {} as Baralho,
      cartaInicioId: 'cartaInicioId',
      jogadores: [],
      dado: 0,
      status: '',
      jogadorEscolhido: {} as Jogador
    }

    let respostaAtual: Sala | undefined;

    //Fazendo a requisição pelo método testado e colocando os dados dentro da respostaAtual
    service.enviarJogadorParaFinalizar(novaCategoriaCartasDoJogoDTO).subscribe({
      next: dados => respostaAtual = dados,
      error: err => fail('error com observable')
    })

    const requisicao = httpTestingController.expectOne(testeURL);
    const httpRequest = requisicao.request;

    requisicao.flush(resultadoEsperado);

    //Esperando que a resposta do método seja igual à sala mock
    expect(httpRequest.method).toBe('PUT');
    expect(httpRequest.url).toBe(testeURL);
    expect(respostaAtual).toEqual(resultadoEsperado);
  })
});
