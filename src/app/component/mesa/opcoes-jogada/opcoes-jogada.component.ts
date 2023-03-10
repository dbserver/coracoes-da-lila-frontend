import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartaDoJogoEnumCategoria } from 'src/app/enum/CartaDoJogoEnumCategoria';
import { CartaDoJogoEnumTipo } from 'src/app/enum/CartaDoJogoEnumTipo';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { AreaDeCompraService } from 'src/app/service/area-de-compra-service/area-de-compra.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
@Component({
  selector: 'app-opcoes-jogada',
  templateUrl: './opcoes-jogada.component.html',
  styleUrls: ['./opcoes-jogada.component.scss']
})
export class OpcoesJogadaComponent implements OnInit {
  public sala: Sala = {} as Sala;
  public jogador: Jogador = {} as Jogador;
  public listacartasMao: Array<CartaDoJogo> = [];
  public statusDado = false;
  public maoAntiga = 0;

  enumCategoria = CartaDoJogoEnumCategoria;
  enumTipo = CartaDoJogoEnumTipo;

  constructor(
    private mesaJogoService: MesaJogoService,
    private areaCompraService: AreaDeCompraService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
        this.sala = sala;
        this.jogador = jogador;
        this.escutaEventoCompra()
        this.mesaJogoService.setJogadorAtualNaMesa(this.jogador);
      });
    });
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
 // call or add here your code
}

  public escutaEventoCompra(): void {
    this.areaCompraService.emitirCartaJogo.subscribe(
      (listacartasMao: CartaDoJogo[]) =>
        (this.jogador.cartasDoJogo = listacartasMao)
    );
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.jogador = this.sala.jogadores?.find(
        (jogador) => jogador.id == this.jogador?.id
      ) as Jogador;
    });
  }

  public somaCoracoes(){
    const total = this.jogador.coracaoGrande + this.jogador.coracaoPequeno + this.jogador.bonusCoracaoGrande + this.jogador.bonusCoracaoPequeno;
    return total;
  }

  public podeComprarCarta(cartas: Array<CartaDoJogo>) {
    let cartasCompraveis: Array<number> = [];
    cartas.forEach((carta, index) => {
      if(index < 6) {
        let coracaoPequeno = 0;
        let coracaoGrande = 0;

        this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
          coracaoPequeno = this.jogador.coracaoPequeno + this.jogador.bonusCoracaoPequeno;
          coracaoGrande = this.jogador.coracaoGrande + this.jogador.bonusCoracaoGrande;
        });

        if (carta.valorCoracaoPequeno! <= coracaoPequeno && carta.valorCoracaoGrande! <= coracaoGrande) {
          cartasCompraveis.push(index);
        }
      }
    });
    return cartasCompraveis.length > 0;
  }

  public selecioneUmaCartaObjetivo() {
    const modal = document.getElementById("modal")?.style.display;

    return modal == 'flex';
  }

  public podeRolarDado() {
    let cartaBonus = false;
    let cartaTipo!:CartaDoJogoEnumTipo;

    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      const ultimaCarta:number = this.jogador.cartasDoJogo.length - 1;

      cartaBonus = this.jogador.cartasDoJogo[ultimaCarta]?.bonus;
      cartaTipo = this.jogador.cartasDoJogo[ultimaCarta]?.tipo;

    });

    if (this.sala.dado == 0 && cartaBonus && !this.statusDado){
      return cartaTipo
    }

    if (this.sala.dado != 0) {
      this.maoAntiga = this.jogador.cartasDoJogo.length;
      this.statusDado = true;
    } else if (this.jogador.cartasDoJogo.length > this.maoAntiga) {
      this.statusDado = false;
    }
    return '';
  }

  public compraCarta() {
    return this.jogador.cartasDoJogo.length > this.maoAntiga
  }

  public limpaTela() {
    if (this.podeRolarDado() != CartaDoJogoEnumTipo.INFORMACAO && this.podeRolarDado() != CartaDoJogoEnumTipo.ACAO && !this.selecioneUmaCartaObjetivo()) {
      return true;
    } else {
      return false;
    }
  }

  public limparTelaObjetivos() {
    if (!this.selecioneUmaCartaObjetivo()) {
      return true;
    } else {
      return false;
    }
  }
}
