import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EntrarMesaComponent } from './entrar-mesa.component';
import { Sala } from 'src/app/model/sala';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Jogador } from 'src/app/model/jogador';
import { MesaService } from 'src/app/service/mesa-service/mesa.service';
import { of } from 'rxjs';
import { asyncError, RouterLinkDirectiveStub } from 'src/app/utils/testUtils';
import { IniciaPartidaService } from 'src/app/service/inicia-partida-service/inicia-partida.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('EntrarMesaComponent', () => {
  let component: EntrarMesaComponent;
  let fixture: ComponentFixture<EntrarMesaComponent>;
  let mesaServiceSpy: jasmine.SpyObj<MesaService>;
  let iniciaPartidaServiceSpy: jasmine.SpyObj<IniciaPartidaService>;
  let findByHashSpy: jasmine.Spy;
  let getQuantidadeJogadoresSpy: jasmine.Spy;
  let verificarSeJogoIniciadoSpy: jasmine.Spy;
  const hash = 'hash';
  const sala: Sala = {
    id: 'id',
    hash: 'hashSala',
    cartaInicioId: 'cartaInicioId',
    cartaObjetivoEscolhida: {} as CartaObjetivo,
    cartasObjetivo: [],
    cartasDoJogo: [],
    dado: 1,
    jogadores: [],
    jogadorEscolhido: {} as Jogador,
    opcoesCartaObjetivo: [],
    status: 'status'
  };
  const mockMesaService = jasmine.createSpyObj<MesaService>({ findByHash: undefined });
  const mockIniciaPartidaService = jasmine.createSpyObj<IniciaPartidaService>({ getQuantidadeJogadores: undefined });
  const mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EntrarMesaComponent,
        RouterLinkDirectiveStub
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: MesaService, useValue: mockMesaService },
        { provide: IniciaPartidaService, useValue: mockIniciaPartidaService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ 'hash': hash }) } } }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(EntrarMesaComponent);
    component = fixture.componentInstance;
    mesaServiceSpy = TestBed.inject(MesaService) as jasmine.SpyObj<MesaService>;
    iniciaPartidaServiceSpy = TestBed.inject(IniciaPartidaService) as jasmine.SpyObj<IniciaPartidaService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve indicar ao Router para navegar quando o jogo já tiver sido iniciado', () => {
    sala.status = 'JOGANDO';
    findByHashSpy = mesaServiceSpy.findByHash.withArgs(hash).and.returnValue(of(sala));
    component.verificarSeJogoIniciado(hash);
    fixture.detectChanges();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/jogoiniciado']);
  });

  it('deve indicar ao Router para navegar quando a sala já estiver cheia', () => {
    findByHashSpy = mesaServiceSpy.findByHash.withArgs(hash).and.returnValue(of(sala));
    getQuantidadeJogadoresSpy = iniciaPartidaServiceSpy.getQuantidadeJogadores.withArgs(hash).and.returnValue(of(6));
    component.verificarSeSalaCheia(hash);
    fixture.detectChanges();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/salacheia']);
  });

  it('deve indicar ao Router para navegar quando o jogo tiver sido finalizado', () => {
    sala.status = 'FINALIZADO';
    findByHashSpy = mesaServiceSpy.findByHash.withArgs(hash).and.returnValue(of(sala));
    component.verificarSeJogoFinalizado(hash);
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/jogofinalizado']);
  });

  it('deve indicar ao Router para navegar quando a hash da sala for inexistente', fakeAsync(() => {
    mockRouter.navigate.calls.reset();
    findByHashSpy = mesaServiceSpy.findByHash.withArgs(hash).and.returnValue(asyncError(new HttpErrorResponse({
      status: 404,
      statusText: 'Not Found'
    })));
    fixture.detectChanges(); //processar ngOnInit()
    tick(); //processar o Observable
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/salaInexistente']);
  }));

});


