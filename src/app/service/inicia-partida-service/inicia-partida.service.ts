import { Jogador } from './../../model/jogador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sala } from '../../model/sala';

@Injectable({
  providedIn: 'root',
})
export class IniciaPartidaService {
  private primeiroJogador: Jogador = {} as Jogador

  constructor(private http: HttpClient) {}

  getQuantidadeJogadores(hash: string): Observable<number> {
    return this.http.get<number>(
      `${environment.API_URL}sala/numeroJogadores/` + hash
    );
  }

  //testar rota
  definePrimeiroJogador(primeiroJogador: Jogador){
    return this.http.put<Jogador>(`${environment.API_URL}api/primeirojogador`, primeiroJogador);
  }

  iniciaPartida(sala: Sala) {
    return this.http.put<Sala>(`${environment.API_URL}api/iniciarpartida`, sala);
  }
}
