import { IniciaPartidaComponent } from './inicia-partida.component';
import { IniciaPartidaService } from 'src/app/service/inicia-partida-service/inicia-partida.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { of } from 'rxjs';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient} from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('IniciaPartidaComponent', () => {
  let component: IniciaPartidaComponent;
  let fixture: ComponentFixture<IniciaPartidaComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let iniciaPartidaService: IniciaPartidaService;
  let mesaJogoService: MesaJogoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [ HttpClientTestingModule ],
      declarations: [IniciaPartidaComponent],
      providers: [IniciaPartidaService, MesaJogoService],
    }).compileComponents();
  });

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(IniciaPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    iniciaPartidaService = TestBed.inject(IniciaPartidaService);
    mesaJogoService = TestBed.inject(MesaJogoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar o método transmiteJogadorEscolhido', () => {
    const jogador = {} as Jogador;
    const sala = {} as Sala;
    sala.jogadores = [jogador, jogador];
    const spy = spyOn(iniciaPartidaService, 'getPrimeiroJogador');
    spyOn(mesaJogoService, 'getemitSalaObservable').and.returnValue(of(sala));
    spyOn(mesaJogoService, 'getemitJogadorObservable').and.returnValue(of(jogador));
    component.ngOnInit();
    component.transmiteJogadorEscolhido();
    expect(spy).toHaveBeenCalled();
    expect(component.desabilitaBtn).toBeFalse();
  });

});

