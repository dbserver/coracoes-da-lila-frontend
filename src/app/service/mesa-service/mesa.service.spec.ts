import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Baralho } from 'src/app/model/baralho';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { MesaService } from './mesa.service';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

/*
Teste unitário deve utilizar dublê das dependências.
Utilizar mock das chamadas do HTTP via HttpClientTestingModule e HttpTestingController.
*/
describe('MesaService', () => {
  let service: MesaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    //Configurando TestBed com as dependências
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MesaService]
    });
    //Injetando as dependências
    service = TestBed.inject(MesaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    //Garantindo que não exitem requisições HTTP pendentes
    httpTestingController.verify();
  });

  
    it('foi criado', () => {
      expect(service).toBeTruthy();
    });

    // it('Deve adicionar uma Key "esconder" com o Value "true" no localStorage', () => {
    //   service.esconderBotaoFonteMaior()
    //   expect(localStorage.getItem('esconder')).toEqual('true')
    // });

    // it('deve remover a Key "esconder" do localStorage', () => {
    //   service.mostrarBotaoFonteMaior()
    //   expect(localStorage.getItem('esconder')).toEqual(null)
    // });

    it('deve retornar uma sala para um hash existente', () => {
      const hash = 'hash';
      const testeUrl = `${environment.API_URL}sala/${hash}`;
      //Resultado esperado
      const resposta: Sala = {
        id: 'id',
        hash,
        baralho: {} as Baralho,
        cartaInicioId: 'cartaInicioId',
        cartaObjetivoEscolhida: {} as CartaObjetivo,
        cartasObjetivo: [],
        dado: 1,
        jogadores: [],
        jogadorEscolhido: {} as Jogador,
        opcoesCartaObjetivo: [],
        status: 'status'
      };
      //Resultado a ser obtido
      let respostaAtual: Sala | undefined;
      //Realizando o teste
      service.findByHash(hash).subscribe({
        next: dados => respostaAtual = dados,
        error: err => fail('error handler não deveria ter sido chamado')
      });
      //Mockando as requisições pendentes do HTTP associadas ao teste realizado
      const requisicao = httpTestingController.expectOne(testeUrl);
      //Verificando se a requisição possui dados corretos
      const httpRequest = requisicao.request;
      expect(httpRequest.method).toBe('GET');
      expect(httpRequest.url).toBe(testeUrl);
      //Disparando a resposta do HTTP mockado
      requisicao.flush(resposta);
      //Verificando o resultado esperado
      expect(respostaAtual).toEqual(resposta);
    });

    it('deve retornar um erro 404 para um hash inexistente', () => {
      const hash = 'hash';
      const testeUrl = `${environment.API_URL}sala/${hash}`;
      //Resultado esperado
      const status = 404;
      const statusText = 'Not Found';
      //Resultado a ser obtido
      let erroAtual: HttpErrorResponse | undefined;
      //Realizando o teste
      service.findByHash(hash).subscribe({
        next: dados => fail('next handler não deveria ter sido chamado'),
        error: err => erroAtual = err,
        complete: () => fail('complete handler não deveria ter sido chamado')
      });
      //Mockando as requisições pendentes do HTTP associadas ao teste realizado
      const requisicao = httpTestingController.expectOne(testeUrl);
      //Verificando se a requisição possui dados corretos
      const httpRequest = requisicao.request;
      expect(httpRequest.method).toBe('GET');
      expect(httpRequest.url).toBe(testeUrl);
      //Disparando a resposta do HTTP mockado
      requisicao.flush(null, { status, statusText });
      //Verificando o resultado esperado
      if (!erroAtual) {
        throw new Error('Error precisa estar definido');
      }
      expect(erroAtual.status).toBe(status);
      expect(erroAtual.statusText).toBe(statusText);
    });

    it('deve retornar um erro 500 para uma falha no lado servidor', () => {
      const hash = 'hash';
      const testeUrl = `${environment.API_URL}sala/${hash}`;
      //Resultado esperado
      const status = 500;
      const statusText = 'Internal Server Error';
      //Resultado a ser obtido
      let erroAtual: HttpErrorResponse | undefined;
      //Realizando o teste
      service.findByHash(hash).subscribe({
        next: dados => fail('next handler não deveria ter sido chamado'),
        error: err => erroAtual = err,
        complete: () => fail('complete handler não deveria ter sido chamado')
      });
      //Mockando as requisições pendentes do HTTP associadas ao teste realizado
      const requisicao = httpTestingController.expectOne(testeUrl);
      //Verificando se a requisição possui dados corretos
      const httpRequest = requisicao.request;
      expect(httpRequest.method).toBe('GET');
      expect(httpRequest.url).toBe(testeUrl);
      //Disparando a resposta do HTTP mockado
      requisicao.flush(null, { status, statusText });
      //Verificando o resultado esperado
      if (!erroAtual) {
        throw new Error('Error precisa estar definido');
      }
      expect(erroAtual.status).toBe(status);
      expect(erroAtual.statusText).toBe(statusText);
    });

    it('deve retornar um erro quando rede falha', () => {
      const hash = 'hash';
      const testeUrl = `${environment.API_URL}sala/${hash}`;
      //Resultado esperado
      const progressEvent = new ProgressEvent('error');
      //Resultado a ser obtido
      let erroAtual: HttpErrorResponse | undefined;
      //Realizando o teste
      service.findByHash(hash).subscribe({
        next: dados => fail('next handler não deveria ter sido chamado'),
        error: err => erroAtual = err,
        complete: () => fail('complete handler não deveria ter sido chamado')
      });
      //Mockando as requisições pendentes do HTTP associadas ao teste realizado
      const requisicao = httpTestingController.expectOne(testeUrl);
      //Verificando se a requisição possui dados corretos
      const httpRequest = requisicao.request;
      expect(httpRequest.method).toBe('GET');
      expect(httpRequest.url).toBe(testeUrl);
      //Disparando a resposta do HTTP mockado
      requisicao.error(progressEvent);
      //Verificando o resultado esperado
      if (!erroAtual) {
        throw new Error('Error precisa estar definido');
      }
      expect(erroAtual.error).toEqual(progressEvent);
    });
  });