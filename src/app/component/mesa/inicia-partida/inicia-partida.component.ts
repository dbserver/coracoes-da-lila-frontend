import { Component, OnInit } from '@angular/core';
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
  sala: Sala;
  jogadorPrincipal: Jogador;
  hash = '';
  enviaCartaInicio: CartaInicio;

  constructor(
    private iniciaPartidaService: IniciaPartidaService,
    private mesaJogoService: MesaJogoService,
    private cartaService: CartaService
  ) {
    this.sala = {} as Sala;
    this.jogadorPrincipal = {} as Jogador;
    this.primeiroJogador = {} as Jogador;
    this.enviaCartaInicio = {} as CartaInicio;
  }

  transmiteJogadorEscolhido() {
    this.sala.jogadorEscolhido = this.iniciaPartidaService.getPrimeiroJogador();
    if (this.sala.jogadores.length >= 2) {
      this.desabilitaBtn = false;
    }
  }

  enviaStatus(): void {
    this.desabilitaBtn = true;
    let sendSala: Sala = this.sala;
    sendSala.status = 'JOGANDO';
    this.iniciaPartidaService.iniciaPartida(sendSala).subscribe(sala => this.sala = sala);
  }

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.sala = sala;
      this.getCartaInicio();
    });

    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      this.jogadorPrincipal = jogador;
    });
  }

  private getCartaInicio(){
    let uuid = this.sala.cartaInicioId;
    this.cartaService.getCartaInicio(uuid).subscribe((cartaInicio: CartaInicio)=>{
      this.enviaCartaInicio = cartaInicio;
     });
   }
}
