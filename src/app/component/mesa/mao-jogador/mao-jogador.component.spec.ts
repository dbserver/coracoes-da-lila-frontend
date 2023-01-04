import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NovaCategoriaCartasDoJogoDTO } from 'src/app/dto/NovaCategoriaCartasDoJogoDTO';
import { NovaCategoriaDTO } from 'src/app/dto/NovaCategoriaDTO';
import { CartaDoJogoEnumCategoria } from 'src/app/enum/CartaDoJogoEnumCategoria';
import { CartaDoJogoEnumTipo } from 'src/app/enum/CartaDoJogoEnumTipo';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';

import { MaoJogadorComponent } from './mao-jogador.component';

describe('MaoJogadorComponent', () => {
  let component: MaoJogadorComponent;
  let fixture: ComponentFixture<MaoJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaoJogadorComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaoJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Método verificaCartaExisteNaListaDeCartas', () => {
    let novaCategoriaDTO1 : NovaCategoriaDTO = {
      cartaID: 'carta1-576',
      novaCategoria: CartaDoJogoEnumCategoria.AUDITIVA
    }

    let novaCategoriaDTO2 : NovaCategoriaDTO = {
      cartaID: 'carta2-765',
      novaCategoria: CartaDoJogoEnumCategoria.VISUAL
    }

    let cartaDoJogo: CartaDoJogo = {
      id: 'carta1-576',
      tipo: CartaDoJogoEnumTipo.ACAO,
      categoria: CartaDoJogoEnumCategoria.GENERICA,
      bonus: false,
      texto: '',
      valorCoracaoPequeno: 0,
      valorCoracaoGrande: 0,
      fonte: '',
      pontos: 0
    }

    it('Deve retornar true para carta presente na lista de cartas', () => {

      let novaCategoriaCartasDoJogoDTO: NovaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: [novaCategoriaDTO1, novaCategoriaDTO2]
      }

      expect(component.verificaCartaExisteNaListaDeCartas(cartaDoJogo, novaCategoriaCartasDoJogoDTO)).toBeTruthy();
    })

    it ('Deve retornar false para carta inexistente na lista de cartas', () => {
      let novaCategoriaCartasDoJogoDTO: NovaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: [novaCategoriaDTO2]
      }

      expect(component.verificaCartaExisteNaListaDeCartas(cartaDoJogo, novaCategoriaCartasDoJogoDTO)).toBeFalsy();
    })
  })
});
