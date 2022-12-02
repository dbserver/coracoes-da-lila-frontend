import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartaDoJogo } from '../../model/cartaDoJogo';
import { CartaInicio } from '../../model/cartaInicio';
import { CartaObjetivo } from '../../model/cartaObjetivo';

@Injectable({
  providedIn: 'root',
})
export class CartaService {
  constructor(private httpClient: HttpClient) {}

  private readonly URLCarta: string = 'cartadojogo';
  private readonly URLCartaObjetivo: string = 'cartaobjetivo';
  private readonly URLCartaInicio: string = 'cartainicio';

  getListarCarta(): Observable<CartaDoJogo[]> {
    return this.httpClient.get<CartaDoJogo[]>(`${environment.API_URL}${this.URLCarta}`);

  }

  getListarCartaInicio(): Observable<CartaInicio[]> {
    return this.httpClient.get<CartaInicio[]>(`${environment.API_URL}${this.URLCartaInicio}`);
  }

  getListarCartaObjetivo(): Observable<CartaObjetivo[]> {
    return this.httpClient.get<CartaObjetivo[]>(`${environment.API_URL}${this.URLCartaObjetivo}`);
  }

  getCartaInicio(uuid: String): Observable<CartaInicio>{
    return this.httpClient.get<CartaInicio>(`${environment.API_URL}${this.URLCartaInicio}/${uuid}`)
  }
}
