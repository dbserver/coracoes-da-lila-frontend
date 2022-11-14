import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { IniciaPartidaService } from 'src/app/service/inicia-partida.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';

@Component({
  selector: 'app-inicia-partida',
  templateUrl: './inicia-partida.component.html',
  styleUrls: ['./inicia-partida.component.scss'],
})
export class IniciaPartidaComponent implements OnInit {
  jogadores: number = 0;
  desabilitaBtn = true;
  sala: Sala;
  jogadorPrincipal: Jogador;
  hash = '';

  constructor(
    private iniciaPartidaService: IniciaPartidaService,
    private mesaJogoService: MesaJogoService
  ) {
    this.sala = {} as Sala;
    this.jogadorPrincipal = {} as Jogador;
  }

  verificaQuantidadeJogadores() {
    if (this.sala.jogadores.length >= 2) {
      this.desabilitaBtn = false;
    }
  }

  enviaStatus(): void {
    let sendSala: Sala = this.sala;
    sendSala.status = 'JOGANDO';
    this.iniciaPartidaService.iniciaPartida(sendSala).subscribe(sala => this.sala = sala);
  }

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.sala = sala;
      this.verificaQuantidadeJogadores();
    });

    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      this.jogadorPrincipal = jogador;
    });
  }
}
