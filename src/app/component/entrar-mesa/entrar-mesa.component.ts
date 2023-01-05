import { SalaRequest } from './../../model/salaRequest';
import { JogadorService } from './../../service/jogador-service/jogador.service';
import { MesaService } from './../../service/mesa-service/mesa.service';
import { Sala } from 'src/app/model/sala';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogador } from '../../model/jogador';
import { MesaJogoService } from '../../service/mesa-jogo-service/mesa-jogo.service';
import { IniciaPartidaService } from '../../service/inicia-partida-service/inicia-partida.service';
import { catchError, tap } from 'rxjs';
import { errorHandler } from 'src/app/utils/errorHandler';

@Component({
  selector: 'app-entrar-mesa',
  templateUrl: './entrar-mesa.component.html',
  styleUrls: ['./entrar-mesa.component.scss'],
})
export class EntrarMesaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService,
    private router: Router,
    private mesaService: MesaService,
    private jogadorservice: JogadorService,
    private iniciaPartidaService: IniciaPartidaService
  ) {
    this.sala = {} as Sala;
    this.jogador = {} as Jogador;
    this.jogadorPrincipal = {} as Jogador;

  }

  ngOnInit(): void {
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaService
      .findByHash(this.hash)
      .pipe(
        tap(console.log),
        catchError(errorHandler)
      )
      .subscribe({
        next: (sala) => {
          console.log(sala);
          this.sala = sala;
          this.verificarSeSalaCheia(this.hash);
          this.verificarSeJogoIniciado(this.hash);
          this.verificarSeJogoFinalizado(this.hash);
        },
        error: (e) => {
          console.log(e);
          this.router.navigate(['/salaInexistente']);
        }
      });
  }

  hash = '';
  sala: Sala;
  nick = '';
  jogador: Jogador;
  jogadorPrincipal: Jogador;
  statusJogo: string = '';
  salaExiste: boolean = true;

  conectar() {
    this.jogador.nome = this.nick;
    //this.jogadorservice.salvarJogador(this.jogador);

    let salarequest = {
      jogador: this.jogador,
      hash: this.hash,
    } as SalaRequest;
    if (this.nomeValido()) {
      this.mesaService
        .conectarNovoJogador(salarequest)
        .subscribe((salaResp) => {
          this.sala = salaResp.sala;
          this.jogadorPrincipal = salaResp.jogador;
          this.emit();
        });
      this.roteamento();
    }
  }

  roteamento() {
    if (this.hash != this.sala.hash) {
      this.router.navigate(['**']);
    } else {
      this.router.navigate(['/jogo', this.sala.hash]);
    }
  }

  emit() {
    this.mesaJogoService.getemitSalaSubject().next(this.sala);
    this.mesaJogoService.getemitJogadorSubject().next(this.jogadorPrincipal);
  }

  getNomeJogador() {
    return this.jogador.nome;
  }

  nomeValido(): boolean{
    var pattern = /^[a-zA-Z\u00C0-\u00FF0-9 ]{2,10}$/gmi;

    return pattern.test(this.jogador.nome);
  }

  verificarSeSalaCheia(hash: string) {
    this.mesaService
    .findByHash(hash)
    .subscribe((sala) => {(this.statusJogo = sala.status); })


    this.iniciaPartidaService
      .getQuantidadeJogadores(hash)
      .subscribe((jogadores) => {
        if (jogadores >= 6 || this.statusJogo === 'NOVO' && 'AGUARDANDO') {
          this.router.navigate(['/salacheia']);
        }
      });
  }

  verificarSeJogoIniciado(hash: string) {
    this.mesaService
    .findByHash(hash)
    .subscribe((sala) => {(this.statusJogo = sala.status); 
      if(this.statusJogo === 'JOGANDO' && 'ULTIMA_RODADA'){
      this.router.navigate(['/jogoiniciado']);
    }})

  }

  verificarSeJogoFinalizado(hash: string) {
    this.mesaService
      .findByHash(hash)
      .subscribe((sala) => {
        (this.statusJogo = sala.status); if (this.statusJogo === 'FINALIZADO') {
          this.router.navigate(['/jogofinalizado']);
        }
      })

  }
}

