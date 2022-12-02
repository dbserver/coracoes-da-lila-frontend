import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { IniciaPartidaService } from 'src/app/service/inicia-partida-service/inicia-partida.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';

@Component({
  selector: 'app-primeiro-jogador',
  templateUrl: './primeiro-jogador.component.html',
  styleUrls: ['./primeiro-jogador.component.scss']
})
export class PrimeiroJogadorComponent implements OnInit {
  jogadores: Jogador[] = new Array();
  sala: Sala = {} as Sala;
  primeiroJogador: Jogador = {} as Jogador;
  jogador: Jogador;
  public jogadorModal: Jogador = {} as Jogador;
  isHost: boolean = true;
  desabilitaBtn = false;

  constructor(
    private mesaJogoService: MesaJogoService,
    private iniciaPartidaService: IniciaPartidaService
  ) {
    this.jogador = {} as Jogador;
   }

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
        this.primeiroJogador = jogador;
        this.verificaQuantidadeJogadores();
        this.sala = sala;
        this.jogadores = sala.jogadores;
      });
    });
  }


  enviaStatus(): void {
    let sendSala: Sala = this.sala;
    sendSala.status = 'JOGANDO';
    this.iniciaPartidaService.iniciaPartida(sendSala).subscribe(sala => this.sala = sala);
  }

  verificaQuantidadeJogadores() {
    if (this.sala.jogadores.length >= 2) {
      this.desabilitaBtn = false;
    }
  }

  visibilidade(id:number){
    var x = document.getElementById(`icone-coracao-${id}`);

    // for (let index = 0; index < y.length; index++) {
    //   const element = y[index];
    //   y.style.visibility ="hidden";

    // }

    // console.log(y[0]);
    // console.log(x);
    if(x == null){
      return;
    }else{
      if(x.style.visibility == "visible"){
        x.style.visibility ="hidden";
    }else {
        x.style.visibility ="visible";
    }

  }
}
}
