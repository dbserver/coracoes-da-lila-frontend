import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from '../../model/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  salvarJogador(jogador: Jogador): Observable<Jogador> {
    return this.httpclient.post<Jogador>(this.jogadorURL, jogador);
  }

  procurarJogador(id: String): Observable<Jogador> {
    return this.httpclient.get<Jogador>(`${this.jogadorURL}${id}`);
  }

  jogadorURL = `${environment.API_URL}jogador/`;


constructor(private httpclient: HttpClient) { }

}
