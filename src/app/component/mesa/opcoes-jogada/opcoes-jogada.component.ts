import { Component, OnInit } from '@angular/core';
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

  constructor(
    private mesaJogoService: MesaJogoService,
    private areaCompraService: AreaDeCompraService
  ) {}

  ngOnInit(): void {
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
        this.sala = sala;
        this.jogador = jogador;
        this.escutaEventoCompra()
        this.mesaJogoService.setJogadorAtualNaMesa(this.jogador);
        console.log(this.jogador);
      });
    });
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



}
