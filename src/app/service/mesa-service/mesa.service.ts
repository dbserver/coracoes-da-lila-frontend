import { SalaRequest } from './../../model/salaRequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sala } from 'src/app/model/sala';
import { Jogador } from '../../model/jogador';
import { Observable } from 'rxjs';
import { SalaResponse } from '../../model/salaResponse';

@Injectable({
  providedIn: 'root',
})
export class MesaService {

  constructor(private http: HttpClient) {}

  /* Envia a informação do primeiro jogador para o back end.
   * Recebe as informações da sala criada.
   */
  iniciarHost(jogador: Jogador): Observable<SalaResponse> {
    return this.http.post<SalaResponse>(
      `${environment.API_URL}api/iniciar`,
      jogador
    );
  }

  /* O novo jogador se conecta através desta requisição
   *
   */
  conectarNovoJogador(salaRequest: SalaRequest): Observable<SalaResponse> {
    return this.http.put<SalaResponse>(
      `${environment.API_URL}api/conectar`,
      salaRequest
    );
  }

  findByHash(hash: string): Observable<Sala> {
    return this.http.get<Sala>(`${environment.API_URL}sala/${hash}`);
  }

  mostrarBotaoFonteMaior() {
    return(
    localStorage.removeItem('esconder')
    )}

  esconderBotaoFonteMaior() {
    return(
    localStorage.setItem('esconder', 'true')
    )}
}
