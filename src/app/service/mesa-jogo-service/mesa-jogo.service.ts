import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NovaCategoriaCartasDoJogoDTO } from 'src/app/dto/NovaCategoriaCartasDoJogoDTO';
import { environment } from 'src/environments/environment';
import { Jogador } from '../../model/jogador';
import { Sala } from '../../model/sala';
@Injectable({
  providedIn: 'root',
})
export class MesaJogoService {
  private emitSala$ = new BehaviorSubject<Sala>({} as Sala);
  private emitJogador$ = new BehaviorSubject<Jogador>({} as Jogador);
  private emitJogadorAtual : Jogador = {} as Jogador

  constructor(private http: HttpClient) {}

  setJogadorAtualNaMesa(jogador : Jogador){
    this.emitJogadorAtual = jogador
  }

  getJogadorAtualNaMesa():Jogador{
    return this.emitJogadorAtual
  }

  getemitSalaObservable(): Observable<Sala> {
    return this.emitSala$.asObservable();
  }

  getemitSalaSubject() {
    return this.emitSala$;
  }

  getemitJogadorObservable(): Observable<Jogador> {
    return this.emitJogador$.asObservable();
  }

  getemitJogadorSubject() {
    return this.emitJogador$;
  }

  comprarCartas(sala: Sala){
    return this.http.put<Sala>(environment.API_URL+'api/jogada/comprarcarta',sala)
  }

  comprarCartaObjetivo(sala: Sala){
    return this.http.put<Sala>(environment.API_URL+'api/jogada/comprarcartaobjetivo',sala)
  }

  buscarDuasCartasObjetivo(sala: Sala){
    return this.http.put<Sala>(environment.API_URL+'api/jogada/escolheentreduascartasobjetivo',sala)
  }

  compraCartaObjetivoEscolhida(sala: Sala){
    return this.http.put<Sala>(environment.API_URL+'api/jogada/compracartaobjetivoescolhida',sala);
  }

  comprarCoracaoP(sala: Sala){
    return this.http.put<Sala>(environment.API_URL+'api/jogada/comprarcoracaopequeno',sala);
  }

  comprarCoracaoG(sala: Sala){
    return this.http.put<Sala>(environment.API_URL+'api/jogada/comprarcoracaogrande',sala);
  }

  enviarJogadorParaFinalizar(params: NovaCategoriaCartasDoJogoDTO){
    return this.http.put<Sala>(environment.API_URL+'api/jogada/finalizastatusjogador', params);
  }
}
