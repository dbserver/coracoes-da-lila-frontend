import { CartaDoJogo } from './../../../model/cartaDoJogo';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilitaDadoComponent } from './habilita-dado.component';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';

import { Sala } from 'src/app/model/sala';
import { Jogador } from 'src/app/model/jogador';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CartaDoJogoEnumTipo } from 'src/app/enum/CartaDoJogoEnumTipo';
import { CartaDoJogoEnumCategoria } from 'src/app/enum/CartaDoJogoEnumCategoria';

describe('HabilitaDadoComponent', () => {
  let component: HabilitaDadoComponent;
  let fixture: ComponentFixture<HabilitaDadoComponent>;
  let mesaJogoService: MesaJogoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabilitaDadoComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [{ provide: MesaJogoService, useClass: MesaJogoService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitaDadoComponent);
    component = fixture.componentInstance;
    mesaJogoService = TestBed.inject(MesaJogoService);
    fixture.detectChanges();
    const sala: Sala = {
      id: '1',
      hash: '1',
      cartasObjetivo: [],
      opcoesCartaObjetivo: [],
      cartaObjetivoEscolhida: {} as any,
      cartasDoJogo: [],
      cartaInicioId: '1',
      jogadores: [
        {
          id: '1',
          nome: 'jogador1',
          cartasDoJogo: [
            {
              id: 'a',
              tipo: CartaDoJogoEnumTipo.ACAO,
              categoria: CartaDoJogoEnumCategoria.FISICA,
              bonus: false,
              texto: 'texto',
              valorCoracaoPequeno: 0,
              valorCoracaoGrande: 0,
              fonte: 'fonte',
              pontos: 0,
            },
            {
              id: 'b',
              tipo: CartaDoJogoEnumTipo.DEFINICAO,
              categoria: CartaDoJogoEnumCategoria.INTELECTUAL,
              bonus: true,
              texto: 'texto',
              valorCoracaoPequeno: 0,
              valorCoracaoGrande: 0,
              fonte: 'fonte',
              pontos: 0,
            },
          ],
          cartasObjetivo: [],
          pontos: 0,
          pontosObjetivo: 0,
          coracaoPequeno: 0,
          coracaoGrande: 0,
          bonusCoracaoPequeno: 0,
          bonusCoracaoGrande: 0,
          isHost: true,
          status: 'JOGANDO',
        } as Jogador,
      ],
      dado: 0,
      status: 'JOGANDO',
      jogadorEscolhido: {} as Jogador,
    };
    mesaJogoService.getemitSalaSubject().next(sala);


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar se o método mudaDesabilitado() é chamado"', () => {
    spyOn(component, 'mudaDesabilitado');
    let botao = fixture.nativeElement.querySelector('.botao');
    expect(component.desabilitado).toBeTrue();
    botao.click();
    expect(component.desabilitado).toBeTrue();
  });

});
