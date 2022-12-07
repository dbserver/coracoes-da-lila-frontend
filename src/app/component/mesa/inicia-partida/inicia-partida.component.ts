import { Component, OnInit, Input } from '@angular/core';
import { CartaInicio } from 'src/app/model/cartaInicio';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { CartaService } from 'src/app/service/cartas-service/cartas.service';
import { IniciaPartidaService } from 'src/app/service/inicia-partida-service/inicia-partida.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';

@Component({
  selector: 'app-inicia-partida',
  templateUrl: './inicia-partida.component.html',
  styleUrls: ['./inicia-partida.component.scss'],
})
export class IniciaPartidaComponent implements OnInit {
  primeiroJogador: Jogador;
  jogadores: number = 0;
  desabilitaBtn = true;
  desabilitaBtn2 = true;
  desabilitaBtn3 = true;

  sala: Sala;
  jogadorHost: Jogador;
  hash = '';
  enviaCartaInicio: CartaInicio;
  mudanca$: boolean = false;

  constructor(
    private iniciaPartidaService: IniciaPartidaService,
    private mesaJogoService: MesaJogoService,
    private cartaService: CartaService
  ) {
    this.sala = {} as Sala;
    this.primeiroJogador = {} as Jogador;
    this.enviaCartaInicio = {} as CartaInicio;
    this.jogadorHost = {} as Jogador;
  }

  transmitePrimeiroJogadorEscolhido() {
    this.primeiroJogador = this.iniciaPartidaService.getPrimeiroJogador();
    if (this.sala.jogadores.length >= 2) {     
      this.desabilitaBtn = false
    }
  }

  enviarPrimeiroJogador() {
    this.iniciaPartidaService
      .definePrimeiroJogador(this.primeiroJogador)
      .subscribe(primeiroJogador => this.primeiroJogador = primeiroJogador);
      console.log(this.primeiroJogador)
  }

  enviaStatus(): void {
    let sendSala: Sala = this.sala;
    sendSala.status = 'JOGANDO';
    this.iniciaPartidaService
      .iniciaPartida(sendSala)
      .subscribe(sala => this.sala = sala);
  }

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.sala = sala;
      this.iniciaPartidaService.getPrimeiroJogador();
    });

    this.mesaJogoService.getemitJogadorObservable().subscribe(jogador => {
      this.jogadorHost = jogador;
    });

    this.getCartaInicio();
  }

  private getCartaInicio() {
    let uuid = this.sala.baralho?.idCartaInicio;
    this.cartaService
      .getCartaInicio(uuid)
      .subscribe((cartaInicio: CartaInicio) => {
        this.enviaCartaInicio = cartaInicio;
      });
  }
}
