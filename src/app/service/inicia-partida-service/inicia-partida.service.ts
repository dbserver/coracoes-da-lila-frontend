import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from 'src/app/model/jogador';
import { environment } from 'src/environments/environment';
import { Sala } from '../../model/sala';

@Injectable({
  providedIn: 'root',
})
export class IniciaPartidaService {

  private emitePrimeiroJogador: Jogador = {} as Jogador;
  
  constructor(private http: HttpClient) {}

  getQuantidadeJogadores(hash: string): Observable<number> {
    return this.http.get<number>(
      `${environment.API_URL}sala/numeroJogadores/` + hash
    );
  }

  iniciaPartida(sala: Sala) {
    return this.http.put<Sala>(`${environment.API_URL}api/iniciarpartida`, sala);
  }

  setPrimeiroJogador(primeiroJogador : Jogador) {
    this.emitePrimeiroJogador = primeiroJogador;
  }

  getPrimeiroJogador(): Jogador{
    return this.emitePrimeiroJogador;
  }

  definePrimeiroJogador(primeiroJogador: Jogador){
    return this.http.put<Jogador>(`${environment.API_URL}api/primeirojogador`, primeiroJogador);
  }


}

