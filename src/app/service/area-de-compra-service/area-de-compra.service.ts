import { Injectable, EventEmitter } from '@angular/core';
import { CartaDoJogo } from '../../model/cartaDoJogo';



@Injectable({
  providedIn: 'root'
})
export class AreaDeCompraService {
  public emitirCartaJogo: EventEmitter<CartaDoJogo[]> = new EventEmitter<CartaDoJogo[]>();
}
