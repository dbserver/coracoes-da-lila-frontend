import { IniciaPartidaService } from 'src/app/service/inicia-partida-service/inicia-partida.service';
import { Jogador } from './../../model/jogador';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { MatRadioChange } from '@angular/material/radio'

@Component({
  selector: 'app-primeiro-jogador',
  templateUrl: './primeiro-jogador.component.html',
  styleUrls: ['./primeiro-jogador.component.scss'],
})
export class PrimeiroJogadorComponent implements OnInit {
  @Output() transmitirPrimeiroJogador = new EventEmitter();
  primeiroJogador: Jogador = {} as Jogador;
  sala: Sala = {} as Sala;
  jogadores: Jogador[] = new Array();
  jogador: Jogador = {} as Jogador;

  constructor(
    private mesaJogoService: MesaJogoService,
    private iniciaPartidaService: IniciaPartidaService
  ) {}

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.mesaJogoService.getemitJogadorObservable().subscribe(escolhido => {
          this.jogador = escolhido;
          this.iniciaPartidaService.setPrimeiroJogador(escolhido);
          this.sala = sala;
          this.jogadores = sala.jogadores;
        });
    });
  }

  transmitePrimeiroJogadorEscolhido(primeiroJogador: Jogador) {
    this.primeiroJogador = primeiroJogador;
    this.iniciaPartidaService.setPrimeiroJogador(this.primeiroJogador);
    this.transmitirPrimeiroJogador.emit();
  }
}
