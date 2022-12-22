import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Baralho } from 'src/app/model/baralho';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';

@Component({
  selector: 'app-modal-zoom-objetivo',
  templateUrl: './modal-zoom-objetivo.component.html',
  styleUrls: ['./modal-zoom-objetivo.component.scss']
})
export class ModalZoomObjetivoComponent implements OnInit {

  public baralho: Baralho = {} as Baralho;
  // public cartaObjetivo!: CartaObjetivo;
  public cartaObjetivo: CartaObjetivo = {} as CartaObjetivo;

  //apagar
  public listaCartas: Array<CartaDoJogo> = [];
  public carta: CartaDoJogo = {} as CartaDoJogo;
  //apagar
  
  constructor(
    public dialogRef: MatDialogRef<ModalZoomObjetivoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: CartaObjetivo
    ) { }
  ngOnInit(): void {
  }
  
  fecharZoom() {
    this.dialogRef.close();
  }

}
