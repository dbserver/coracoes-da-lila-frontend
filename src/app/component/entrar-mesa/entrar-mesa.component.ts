import { SalaRequest } from './../../model/salaRequest';
import { JogadorService } from './../../service/jogador-service/jogador.service';
import { MesaService } from './../../service/mesa-service/mesa.service';
import { Sala } from 'src/app/model/sala';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogador } from '../../model/jogador';
import { MesaJogoService } from '../../service/mesa-jogo-service/mesa-jogo.service';
import { IniciaPartidaService } from '../../service/inicia-partida-service/inicia-partida.service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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

  isvalid = true;

  ngOnInit(): void {
    this.hash = String(this.route.snapshot.paramMap.get('hash'));

    this.mesaService
      .findByHash(this.hash)
      .pipe(
        tap(console.log),
        catchError(this.tratarErro))
      .subscribe((sala) => (this.sala = sala));

    this.verificaSalaCheia(this.hash);
  }

  hash = '';
  sala: Sala;
  nick = '';
  jogador: Jogador;
  jogadorPrincipal: Jogador;
  salaCheia: boolean = false;

  conectar() {
    this.jogador.nome = this.nick;
    //this.jogadorservice.salvarJogador(this.jogador);

    let salarequest = {
      jogador: this.jogador,
      hash: this.hash,
    } as SalaRequest;
    if (this.nomeValido()) {
      this.isvalid = true;
      this.mesaService
        .conectarNovoJogador(salarequest)
        .subscribe((salaResp) => {
          this.sala = salaResp.sala;
          this.jogadorPrincipal = salaResp.jogador;
          this.emit();
        });
      this.roteamento();
    }else{
      this.isvalid = false;
    }
  }

  roteamento() {
    if(this.hash!= this.sala.hash){
      this.router.navigate(['**']);
    }else{
    this.router.navigate(['/jogo', this.sala.hash]);
    }
  }
  

  emit() {
    this.mesaJogoService.getemitSalaSubject().next(this.sala);
    this.mesaJogoService.getemitJogadorSubject().next(this.jogadorPrincipal);
  }

  verificaSalaCheia(hash: string) {
    this.iniciaPartidaService
      .getQuantidadeJogadores(hash)
      .subscribe((jogadores) => {
        if (jogadores >= 6) {
          this.salaCheia = true;
        }
      });
  }

  getNomeJogador() {
    return this.jogador.nome;
  }

  nomeValido(): boolean {
    if (this.jogador.nome == null) {
      return false;
    }
    return this.jogador.nome.length >= 2;
  }

  private tratarErro(error: HttpErrorResponse): Observable<never> {
    this.router.navigate(['/erro/sala'])
    return throwError(`Ocorreu um erro - codigo do erro: ${error.status}`);
  }
}
