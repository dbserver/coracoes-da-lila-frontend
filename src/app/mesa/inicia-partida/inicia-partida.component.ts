import { Component, OnInit } from '@angular/core';
import { Baralho } from 'src/app/model/baralho';
import { CartaInicio } from 'src/app/model/cartaInicio';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { CartaService } from 'src/app/service/cartas.service';
import { IniciaPartidaService } from 'src/app/service/inicia-partida.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';

@Component({
  selector: 'app-inicia-partida',
  templateUrl: './inicia-partida.component.html',
  styleUrls: ['./inicia-partida.component.scss'],
})
export class IniciaPartidaComponent implements OnInit {
  jogadores: number = 0;
  desabilitaBtn = false;
  sala: Sala;
  jogadorPrincipal: Jogador;
  hash = '';
  enviaCartaInicio: CartaInicio;

  loading = false;

  constructor(
    private iniciaPartidaService: IniciaPartidaService,
    private mesaJogoService: MesaJogoService,
    private cartaService: CartaService
  ) {
    this.sala = {} as Sala;
    this.jogadorPrincipal = {} as Jogador;
    this.enviaCartaInicio = {} as CartaInicio;
  }

  verificaQuantidadeJogadores() {
    if (this.sala.jogadores.length >= 2) {
      this.desabilitaBtn = false;
    }
  }

  enviaStatus(): void {
    this.loading = true;
    let sendSala: Sala = this.sala;
    // sendSala.status = 'JOGANDO';
    // this.iniciaPartidaService.iniciaPartida(sendSala).subscribe(sala => this.sala = sala);
  }

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.sala = sala;
      this.verificaQuantidadeJogadores();
    });

    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      this.jogadorPrincipal = jogador;
    });

    this.getCartaInicio();
  }

  private getCartaInicio(){
    let uuid = this.sala.baralho.idCartaInicio;
    this.cartaService.getCartaInicio(uuid).subscribe((cartaInicio: CartaInicio)=>{
      this.enviaCartaInicio = cartaInicio;
    });
  }
}
