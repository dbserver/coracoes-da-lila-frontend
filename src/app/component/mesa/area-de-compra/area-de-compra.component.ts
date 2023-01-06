import { HabilitaDadoComponent } from './../habilita-dado/habilita-dado.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Baralho } from '../../../model/baralho';
import { CartaDoJogo } from '../../../model/cartaDoJogo';
import { CartaObjetivo } from '../../../model/cartaObjetivo';
import { Jogador } from '../../../model/jogador';
import { Sala } from '../../../model/sala';
import { AreaDeCompraService } from '../../../service/area-de-compra-service/area-de-compra.service';
import { MesaJogoService } from '../../../service/mesa-jogo-service/mesa-jogo.service';
import { ModalCartasObjetivoComponent } from '../modal-cartas-objetivo/modal-cartas-objetivo.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalZoomComponent } from '../modal-zoom/modal-zoom.component';
import { ModalZoomObjetivoComponent } from '../modal-zoom-objetivo/modal-zoom-objetivo.component';
import { mapTipoCartaDoJogo } from 'src/app/maps/cartaDoJogoMaps';
import { CartaDoJogoEnumTipo } from 'src/app/enum/CartaDoJogoEnumTipo';
@Component({
  selector: 'app-area-de-compra',
  templateUrl: './area-de-compra.component.html',
  styleUrls: ['./area-de-compra.component.scss'],
})
export class AreaDeCompraComponent implements OnInit {
  private hash = '';
  public sala: Sala = {} as Sala;
  public baralho: Baralho = {} as Baralho;
  public listaCartas: Array<CartaDoJogo> = [];
  public listaCartasObjetivo: Array<CartaObjetivo> = [];
  public listaCartasDisponiveis: Array<CartaDoJogo> = [];
  public listaCartasDisponiveisObjetivo: Array<CartaObjetivo> = [];
  public listaCartasMao: Array<CartaDoJogo> = [];
  public listaCartasMaoObjetivo: Array<CartaObjetivo> = [];
  public coracoes: Array<any> = [];
  public jogador: Jogador = {} as Jogador;
  public bonus = false;
  public embaralharCartas: boolean;
  public HabilitaDadoComponent = new HabilitaDadoComponent(this.mesaJogoService);

  public mapTipo = mapTipoCartaDoJogo;

  bloqueiaAcao = false;

  opcoesCartaObjetivo: CartaObjetivo[];

  enumTipo = CartaDoJogoEnumTipo;

  constructor(
    private mesaJogoService: MesaJogoService,
    private route: ActivatedRoute,
    private areaCompraService: AreaDeCompraService,
    public modalCartasObjetivo: ModalCartasObjetivoComponent,
    public zoomCarta: MatDialog,
  ) {
    this.opcoesCartaObjetivo = [] as CartaObjetivo[];
    this.embaralharCartas = false;
  }

  ngOnInit() {
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.sala = sala;
      this.listaCartasDisponiveis = sala.baralho.cartasDoJogo;
      this.listaCartasDisponiveisObjetivo = sala.cartasObjetivo;
      this.jogador = this.mesaJogoService.getJogadorAtualNaMesa();
      this.bloqueiaAcao = false;
      this.bonus = this.podeJogar();
    });
  }

  public comprarCarta(indice: number): void {
    this.sala.dado = 0;
    if (this.jogador.status == 'JOGANDO'&& !this.bloqueiaAcao) {
      if (this.listaCartasDisponiveis[indice].bonus) {
        this.jogador?.cartasDoJogo.push(this.listaCartasDisponiveis[indice]);
        this.listaCartasDisponiveis.splice(indice, 1);
        this.bloqueiaAcao = !this.HabilitaDadoComponent.mudaDesabilitado();
        this.areaCompraService.emitirCartaJogo.emit(this.jogador?.cartasDoJogo);
      } else {
        this.jogador?.cartasDoJogo.push(this.listaCartasDisponiveis[indice]);
        this.listaCartasDisponiveis.splice(indice, 1);
        this.areaCompraService.emitirCartaJogo.emit(this.jogador?.cartasDoJogo);
        this.mesaJogoService
          .comprarCartas(this.sala)
          .subscribe((sala) => (this.sala = sala));
      }
    }
  }

  public comprarCoracaoP() {
    if (this.jogador.status == 'JOGANDO' && !this.bloqueiaAcao) {
      this.sala.dado = 0;
      this.mesaJogoService
        .comprarCoracaoP(this.sala)
        .subscribe((sala) => (this.sala = sala));
    }
  }

  public comprarCoracaoG() {
    if (this.jogador.status == 'JOGANDO' && !this.bloqueiaAcao) {
      this.sala.dado = 0;
      this.mesaJogoService
        .comprarCoracaoG(this.sala)
        .subscribe((sala) => (this.sala = sala));
    }
  }

  public podeComprar({
    valorCoracaoPequeno,
    valorCoracaoGrande,
  }: Partial<CartaDoJogo>): boolean {
    let coracaoP = 0;
    let coracaoG = 0;
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      coracaoP = this.jogador.coracaoPequeno + this.jogador.bonusCoracaoPequeno;
      coracaoG = this.jogador.coracaoGrande + this.jogador.bonusCoracaoGrande;
    });
    return valorCoracaoPequeno! <= coracaoP && valorCoracaoGrande! <= coracaoG;
  }

  public podeComprarObjetivo() {
    let coracaoP = 0;
    let coracaoG = 0;
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      coracaoP = this.jogador.coracaoPequeno + this.jogador.bonusCoracaoPequeno;
      coracaoG = this.jogador.coracaoGrande + this.jogador.bonusCoracaoGrande;
    });

    return coracaoP + coracaoG > 0;
  }

  public verificaSeTemCartaObjetivo() {
    if (this.sala.cartasObjetivo.length == 0) {
      return true;
    }
    return false;
  }

  public verificaBonus() {
    if (this.jogador?.cartasDoJogo.length > 0) {
      let ultimaCarta = (this.jogador?.cartasDoJogo.length - 1) as number;
      if (this.jogador?.cartasDoJogo[ultimaCarta].bonus) {
        return true;
      }
    }
    return false;
  }

  public podeJogar() {
    if (this.jogador.status == 'JOGANDO') {
      console.log(this.HabilitaDadoComponent.mudaDesabilitado());
      return true;
    }
    return false;
  }

  public bloquearCompraCoracoesPequenos() {
    if (
      this.jogador.status == 'JOGANDO' &&
      this.verificarCoracoesQualquerTamanho() &&
      this.desabilitarCoracoesPequenos()
    ) {
      return false;
    }
    return true;
  }
  public bloquearCompraCoracoesGrandes() {
    if (
      this.jogador.status == 'JOGANDO' &&
      this.verificarCoracoesQualquerTamanho() &&
      this.verificarCoracoesGrandes()
    ) {
      return false;
    }
    return true;
  }

  public verificarCoracoesQualquerTamanho(): Boolean {
    if (
      this.jogador.coracaoGrande +
      this.jogador.coracaoPequeno +
      this.jogador.bonusCoracaoGrande +
      this.jogador.bonusCoracaoPequeno < 5) {
      return true;
    }
    return false;
  }
  public desabilitarCoracoesPequenos(): Boolean {
    return this.jogador.coracaoPequeno + this.jogador.coracaoGrande < 4;
  }

  public verificarCoracoesGrandes(): Boolean {
    return this.jogador.coracaoGrande + this.jogador.coracaoPequeno < 5;
  }

  public verificaJogadorTemCoracoes() {
    if (
      this.jogador.coracaoGrande == 0 &&
      this.jogador.coracaoPequeno == 0 &&
      this.jogador.bonusCoracaoGrande == 0 &&
      this.jogador.bonusCoracaoPequeno == 0
    )
      return false;
    return true;
  }

  public verificaJogadorTemCoracaoGrande() {
    if (this.jogador.coracaoGrande > 0 || this.jogador.bonusCoracaoGrande > 0)
      return true;
    return false;
  }

  public verificaJogadorTemCoracaoPequeno() {
    if (this.jogador.coracaoPequeno > 0 || this.jogador.bonusCoracaoPequeno > 0)
      return true;
    return false;
  }

  public verificaStatusJogador() {
    if (this.jogador.status == 'JOGANDO') return true;
    return false;
  }

  public compraUmaCartaObjetivo() {
    if (this.jogador.status == 'JOGANDO'&& !this.bloqueiaAcao)
      this.mesaJogoService
        .comprarCartaObjetivo(this.sala)
        .subscribe((sala) => (this.sala = sala));
  }

  public escolherEntreDuasCartasObjetivo() {
    if (this.jogador.status == 'JOGANDO'&& !this.bloqueiaAcao){
      this.buscaCartasObjetivo();
      this.abrirModal();
      this.desabilitaAnimacaoEmbaralhar();
    }
  }

  private buscaCartasObjetivo() {
    this.mesaJogoService
      .buscarDuasCartasObjetivo(this.sala)
      .subscribe(
        (sala) => (
          (this.opcoesCartaObjetivo = sala.opcoesCartaObjetivo),
          (this.sala = sala)
        )
      );
  }

  public abrirModal() {
    const modal = document.getElementById('modal');
    if (modal != null) {
      modal.style.display = 'flex';
    }
  }

  public desabilitaAnimacaoEmbaralhar() {
    document.getElementById('carta-1')?.classList.remove('carta-1');
    document.getElementById('carta-2')?.classList.remove('carta-2');
    document
      .getElementById('container-cartas')
      ?.classList.remove('embaralhar-animacao');
  }

  public habilitaAnimacaoEmbaralhar(resposta: boolean) {
    this.embaralharCartas = resposta;
    document.getElementById('carta-1')?.classList.add('carta-1');
    document.getElementById('carta-2')?.classList.add('carta-2');
    document
      .getElementById('container-cartas')
      ?.classList.add('embaralhar-animacao');
  }

  public abrirZoom(event: Event, carta: CartaDoJogo) {
    event.stopPropagation();
    this.zoomCarta.open(ModalZoomComponent, {
      data: carta,
      height: '92%',
      width: '35%',
      panelClass: 'css-carta'
    });
  }
}
