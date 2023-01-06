import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NovaCategoriaCartasDoJogoDTO } from 'src/app/dto/NovaCategoriaCartasDoJogoDTO';
import { Baralho } from 'src/app/model/baralho';
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

  describe('Testes do método enviaJogadorParaFinalizar()', () => {
    it('enviaJogadorParaFinalizar() testando requisição com caminho feliz', () => {

      //Criando mocks para fazer a requisição
      const novaCategoriaCartasDoJogoDTO: NovaCategoriaCartasDoJogoDTO = {
        salaHash: 'hash',
        listaDeCartas: []
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
  
      
      expect(httpRequest.method).toBe('PUT');
      expect(httpRequest.url).toBe(testeURL);
  
      requisicao.flush(resultadoEsperado);
      expect(respostaAtual).toEqual(resultadoEsperado);
    })
  
    it('enviaJogadorParaFinalizar() testando requisição com caminho infeliz - erro 400 Bad Request', () => {
      const novaCategoriaCartasDoJogoDTO: NovaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: []
      }
  
      const status = 400;
      const statusText = 'Bad Request';
      const testeURL = `${environment.API_URL+'api/jogada/finalizastatusjogador'}`;
  
      let erroAtual: HttpErrorResponse | undefined;
  
      service.enviarJogadorParaFinalizar(novaCategoriaCartasDoJogoDTO).subscribe({
        next: dados => fail ('next handler não deveria ter sido chamado'),
        error: err => erroAtual = err,
        complete: () => fail('complete handler não deveria ter sido chamado')
      })
  
      const requisicao = httpTestingController.expectOne(testeURL);
      const httpRequest = requisicao.request;
      expect(httpRequest.method).toBe('PUT');
      expect(httpRequest.method).not.toBe('GET');
      expect(httpRequest.url).toBe(testeURL);
  
      requisicao.flush(null, {status, statusText});
      if (!erroAtual){
        throw new Error('Error precisa estar definido');
      }
  
      expect(erroAtual.status).toBe(status);
      expect(erroAtual.statusText).toBe(statusText);
  
    })

    it('enviaJogadorParaFinalizar() testando requisição com caminho infeliz - erro 500 Internal Server Error', () => {
      const novaCategoriaCartasDoJogoDTO: NovaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: []
      }
  
      const status = 500;
      const statusText = 'Internal Server Error';
      const testeURL = `${environment.API_URL+'api/jogada/finalizastatusjogador'}`;
  
      let erroAtual: HttpErrorResponse | undefined;
  
      service.enviarJogadorParaFinalizar(novaCategoriaCartasDoJogoDTO).subscribe({
        next: dados => fail ('next handler não deveria ter sido chamado'),
        error: err => erroAtual = err,
        complete: () => fail('complete handler não deveria ter sido chamado')
      })
  
      const requisicao = httpTestingController.expectOne(testeURL);
      const httpRequest = requisicao.request;
      expect(httpRequest.method).toBe('PUT');
      expect(httpRequest.method).not.toBe('GET');
      expect(httpRequest.url).toBe(testeURL);
  
      requisicao.flush(null, {status, statusText});
      if (!erroAtual){
        throw new Error('Error precisa estar definido');
      }
  
      expect(erroAtual.status).toBe(status);
      expect(erroAtual.statusText).toBe(statusText);
  
    })
  })
});
