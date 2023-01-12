import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
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
      declarations: [MaoJogadorComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: MatDialog, useValue: {}
      }],
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

  let novaCategoriaDTO1: NovaCategoriaDTO = {
    cartaID: 'carta1-576',
    novaCategoria: CartaDoJogoEnumCategoria.AUDITIVA
  }

  let novaCategoriaDTO2: NovaCategoriaDTO = {
    cartaID: 'carta2-765',
    novaCategoria: CartaDoJogoEnumCategoria.VISUAL
  }

  let cartaDoJogo1: CartaDoJogo = {
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

  describe('Método verificaCartaExisteNaListaDeCartas', () => {

    it('Deve retornar true para carta presente na lista de cartas', () => {
      component.novaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: [novaCategoriaDTO1, novaCategoriaDTO2]
      }

      expect(component.verificaCartaExisteNaListaDeCartas(cartaDoJogo1)).toBeTruthy();
    })

    it('Deve retornar false para carta inexistente na lista de cartas', () => {
      component.novaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: [novaCategoriaDTO2]
      }

      expect(component.verificaCartaExisteNaListaDeCartas(cartaDoJogo1)).toBeFalsy();
    })
  })

  describe('Testes do método verificaSeCategoriaGenerica', () => {


    it('Deve retornar true para carta do jogo com categoria genérica', () => {
      expect(component.verificaSeCategoriaGenerica(cartaDoJogo1)).toBeTruthy();
    })

    it('Deve retornar false para carta do jogo com categoria diferente de genérica', () => {
      let cartaDoJogo2: CartaDoJogo = {
        id: 'carta2-765',
        tipo: CartaDoJogoEnumTipo.ACAO,
        categoria: CartaDoJogoEnumCategoria.AUDITIVA,
        bonus: false,
        texto: '',
        valorCoracaoPequeno: 0,
        valorCoracaoGrande: 0,
        fonte: '',
        pontos: 0
      }

      expect(component.verificaSeCategoriaGenerica(cartaDoJogo2)).toBeFalsy();
    })
  })

  describe('Testes do método atualizaCategoriaDeCartasGenericas', () => {
    //Mockando a nova categoria que vem do formulário

    it('Deve adicionar uma nova categoria ao DTO para uma nova carta do jogo', () => {
      //Mockando a lista de cartas já adicionadas pelo formulário, com apenas 1 carta

      component.novaCategoria.setValue({ 'categoria': CartaDoJogoEnumCategoria.AUDITIVA });
      component.novaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: [novaCategoriaDTO2]
      }

      component.atualizaCategoriaDeCartasGenericas(cartaDoJogo1);

      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas.length).toBe(2);
      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas[1].cartaID).toEqual('carta1-576');
      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas[1].novaCategoria).toBe(CartaDoJogoEnumCategoria.AUDITIVA)
    })

    it('Deve alterar a nova categoria do DTO para uma carta já existente na lista', () => {

      //Mock do valor recebido pelo formulário
      component.novaCategoria.setValue({ 'categoria': CartaDoJogoEnumCategoria.VISUAL });
      component.novaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: []
      }

      //Mock de carta do jogo
      let cartaDoJogo2: CartaDoJogo = {
        id: 'carta2-765',
        tipo: CartaDoJogoEnumTipo.ACAO,
        categoria: CartaDoJogoEnumCategoria.GENERICA,
        bonus: false,
        texto: '',
        valorCoracaoPequeno: 0,
        valorCoracaoGrande: 0,
        fonte: '',
        pontos: 0
      }

      //Adicionando uma nova categoria à primeira carta selecionada pelo jogador (VISUAL)
      component.atualizaCategoriaDeCartasGenericas(cartaDoJogo2);
      //Testes: deve conter apenas um DTO de carta com categoria alterada
      //deve conter o mesmo ID da carta passada ao método
      //deve ser adicionado a categoria passada no formulário component.novaCategoria (VISUAL)
      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas.length).toBe(1);
      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas[0].cartaID).toEqual(cartaDoJogo2.id);
      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas[0].novaCategoria).toBe(CartaDoJogoEnumCategoria.VISUAL)

      //Alterando a categoria da mesma carta já adicionada
      component.novaCategoria.setValue({ 'categoria': CartaDoJogoEnumCategoria.AUDITIVA });
      component.atualizaCategoriaDeCartasGenericas(cartaDoJogo2);

      //Testes: deve conter apenas um DTO de carta com categoria atualizada
      //deve conter o mesmo ID da carta passada ao método
      //deve ser adicionado a NOVA categoria passada no formulário component.novaCategoria (AUDITIVA)
      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas.length).toBe(1);
      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas[0].cartaID).toEqual(cartaDoJogo2.id);
      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas[0].novaCategoria).toBe(CartaDoJogoEnumCategoria.AUDITIVA)
    })

    it('Não deve adicionar um novo DTO à lista de cartas novaCategoriaCartasDoJogoDTO se a carta não for genérica', () => {
      let cartaDoJogo2: CartaDoJogo = {
        id: 'carta2-765',
        tipo: CartaDoJogoEnumTipo.ACAO,
        categoria: CartaDoJogoEnumCategoria.VISUAL,
        bonus: false,
        texto: '',
        valorCoracaoPequeno: 0,
        valorCoracaoGrande: 0,
        fonte: '',
        pontos: 0
      }

      component.novaCategoria.setValue({ 'categoria': CartaDoJogoEnumCategoria.VISUAL });
      component.novaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: []
      }

      component.atualizaCategoriaDeCartasGenericas(cartaDoJogo2);

      //Teste: espera-se que não tenha nenhum DTO adicionado
      expect(component.novaCategoriaCartasDoJogoDTO.listaDeCartas.length).toBe(0);

    })
  })

  describe('Teste do método bloquearConfirmarCategorias', () => {
    it('Deve retornar true quando todas as cartas genéricas do jogador possuírem uma nova categoria escolhida', () => {
      component.jogador = {
        id: 'jogadorID',
        nome: 'jogadorNOME',
        cartasDoJogo: [cartaDoJogo1],
        cartasObjetivo: [],
        pontos: 0,
        pontosObjetivo: 0,
        isHost: false,
        status: 'JOGANDO',
        coracaoPequeno: 0,
        coracaoGrande: 0,
        bonusCoracaoPequeno: 0,
        bonusCoracaoGrande: 0
      }

      //Mock DTO
      component.novaCategoriaCartasDoJogoDTO = {
        salaHash: '',
        listaDeCartas: [novaCategoriaDTO1]
      }

      //Deve retornar falso quando o número de cartas genéricas do jogador
      //for igual ao número de DTO's na lista de cartas
      expect(component.bloquearConfirmarCategorias()).toBeFalsy();
    })


    it('Deve retornar true quando todas as cartas genéricas do jogador possuírem uma nova categoria escolhida', () => {
      let cartaDoJogo2: CartaDoJogo = {
        id: 'carta2-765',
        tipo: CartaDoJogoEnumTipo.ACAO,
        categoria: CartaDoJogoEnumCategoria.GENERICA,
        bonus: false,
        texto: '',
        valorCoracaoPequeno: 0,
        valorCoracaoGrande: 0,
        fonte: '',
        pontos: 0
      }
      
      component.jogador = {
        id: 'jogadorID',
        nome: 'jogadorNOME',
        cartasDoJogo: [cartaDoJogo1, cartaDoJogo2],
        cartasObjetivo: [],
        pontos: 0,
        pontosObjetivo: 0,
        isHost: false,
        status: 'JOGANDO',
        coracaoPequeno: 0,
        coracaoGrande: 0,
        bonusCoracaoPequeno: 0,
        bonusCoracaoGrande: 0
      }
  
      //Deve retornar true quando o número de cartas genéricas do jogador
      //for maior que o número de DTO's na lista de cartas
      expect(component.bloquearConfirmarCategorias()).toBeTruthy();
    })
  })
});
