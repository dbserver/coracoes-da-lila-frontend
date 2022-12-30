import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeiroJogadorComponent } from './primeiro-jogador.component';
import { IniciaPartidaService } from 'src/app/service/inicia-partida-service/inicia-partida.service';
import { Jogador } from 'src/app/model/jogador';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { Sala } from 'src/app/model/sala';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('PrimeiroJogadorComponent', () => {
  let component: PrimeiroJogadorComponent;
  let fixture: ComponentFixture<PrimeiroJogadorComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let iniciaPartidaService: IniciaPartidaService;
  let mesaJogoService: MesaJogoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [PrimeiroJogadorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [IniciaPartidaService, MesaJogoService],
    }).compileComponents();
  });

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(PrimeiroJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    iniciaPartidaService = TestBed.inject(IniciaPartidaService);
    mesaJogoService = TestBed.inject(MesaJogoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar o método transmitePrimeiroJogadorEscolhido', () => {
    const jogador = {} as Jogador;
    const sala = {} as Sala;
    const spy = spyOn(iniciaPartidaService, 'setPrimeiroJogador');
    spyOn(mesaJogoService, 'getemitSalaObservable').and.returnValue(of(sala));
    spyOn(mesaJogoService, 'getemitJogadorObservable').and.returnValue(of(jogador));
    component.ngOnInit();
    component.transmitePrimeiroJogadorEscolhido(jogador);
    expect(spy).toHaveBeenCalled();
  });

});