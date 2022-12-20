import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Baralho } from 'src/app/model/baralho';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';

@Component({
  selector: 'app-modal-zoom-objetivo',
  templateUrl: './modal-zoom-objetivo.component.html',
  styleUrls: ['./modal-zoom-objetivo.component.scss']
})
export class ModalZoomObjetivoComponent implements OnInit {

  public baralho: Baralho = {} as Baralho;
  public listaCartas: Array<CartaDoJogo> = [];
  public carta: CartaDoJogo = {} as CartaDoJogo;

  constructor(public dialogRef: MatDialogRef<ModalZoomObjetivoComponent>) { }

  ngOnInit(): void {
  }
  
  fecharZoom() {
    this.dialogRef.close();
  }

}
