import { Component, OnInit } from '@angular/core';
import { Baralho } from 'src/app/model/baralho';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';

@Component({
  selector: 'app-modal-zoom',
  templateUrl: './modal-zoom.component.html',
  styleUrls: ['./modal-zoom.component.scss']
})
export class ModalZoomComponent implements OnInit {

  public baralho: Baralho = {} as Baralho;
  public listaCartas: Array<CartaDoJogo> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
