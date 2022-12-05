import { Jogador } from './../../model/jogador';
import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';

@Component({
  selector: 'app-primeiro-jogador',
  templateUrl: './primeiro-jogador.component.html',
  styleUrls: ['./primeiro-jogador.component.scss']
})

export class PrimeiroJogadorComponent implements OnInit {
  sala: Sala = {} as Sala;
  jogadores: Jogador[] = new Array();
  primeiroJogador: Jogador = {} as Jogador;

  constructor(
    private mesaJogoService: MesaJogoService
  ) {}

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.mesaJogoService.getemitJogadorObservable().subscribe((primeiroJogador) => {
        this.primeiroJogador = primeiroJogador;
        this.sala = sala;
        this.jogadores = sala.jogadores;
      });
    });
  }

  enviaPrimeiroJogador() {
    return this.primeiroJogador;
  }

}
