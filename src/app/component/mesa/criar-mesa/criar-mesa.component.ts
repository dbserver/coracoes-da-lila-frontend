import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa-service/mesa.service';

@Component({
  selector: 'app-criar-mesa',
  templateUrl: './criar-mesa.component.html',
  styleUrls: ['./criar-mesa.component.scss'],
})
export class CriarMesaComponent implements OnInit {
  private jogador: Jogador;
  private sala: Sala;
  private jogadorPrincipal: Jogador;
  nick: string;

  carregando = false;

  constructor(
    private mesaService: MesaService,
    private router: Router,
    private mesaJogoService: MesaJogoService
  ) {
    this.jogador = {} as Jogador;
    this.sala = {} as Sala;
    this.nick = '';
    this.jogadorPrincipal = {} as Jogador;
  }

  click() {
    this.jogador = {
      nome: this.nick,
      cartasDoJogo: [],
      cartasObjetivo: [],
      pontos: 0,
      pontosObjetivo: 0,
      coracaoPequeno: 2,
      coracaoGrande: 0,
      isHost: true,
      bonusCoracaoPequeno: 0,
      bonusCoracaoGrande: 0,
      status: 'JOGANDO'
    };
    if(this.nomeValido()){
      this.criarMesa();
      this.carregando = true;
    }
  }

  getNomeJogador(){
    return this.jogador.nome;
  }

  nomeValido(): boolean{
    var pattern = /^[a-zA-Z\u00C0-\u00FF ]{2,10}$/gmi;

    return pattern.test(this.jogador.nome);
  }

  criarMesa() {
    this.mesaService.iniciarHost(this.jogador).subscribe((salaResp) => {
      this.sala = salaResp.sala;
      this.jogadorPrincipal = salaResp.jogador;
      this.roteamento();
    });
  }

  roteamento() {
    this.emit();
    this.router.navigate(['/mesa-criada', this.sala.hash]);
  }

  ngOnInit(): void {
  }

  emit() {
    this.mesaJogoService.getemitSalaSubject().next(this.sala);
    this.mesaJogoService.getemitJogadorSubject().next(this.jogadorPrincipal);
  }

}
