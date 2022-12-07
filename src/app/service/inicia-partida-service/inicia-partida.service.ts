import { Jogador } from './../../model/jogador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sala } from '../../model/sala';

@Injectable({
  providedIn: 'root',
})
export class IniciaPartidaService {
  private mudanca$ = new BehaviorSubject<boolean>({} as boolean);
  // private primeiroJogador: Jogador = {} as Jogador;
  private emitPrimeiroJogador: Jogador = {} as Jogador;

  constructor(private http: HttpClient) {}

  getQuantidadeJogadores(hash: string): Observable<number> {
    return this.http.get<number>(
      `${environment.API_URL}sala/numeroJogadores/` + hash
    );
  }

  eventoMudanca(mudanca$: boolean): Observable<boolean> {
    return this.mudanca$.asObservable();
  }

  setPrimeiroJogador(primeiroJogador : Jogador) {
    this.emitPrimeiroJogador = primeiroJogador;
  }

  getPrimeiroJogador(): Jogador{
    return this.emitPrimeiroJogador;
  }

  definePrimeiroJogador(primeiroJogador: Jogador){
    return this.http.put<Jogador>(`${environment.API_URL}api/primeirojogador`, primeiroJogador);
  }

  iniciaPartida(sala: Sala) {
    return this.http.put<Sala>(`${environment.API_URL}api/iniciarpartida`, sala);
  }
}
