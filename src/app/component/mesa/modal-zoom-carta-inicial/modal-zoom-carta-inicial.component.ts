import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartaInicio } from 'src/app/model/cartaInicio';

@Component({
  selector: 'app-modal-zoom-carta-inicial',
  templateUrl: './modal-zoom-carta-inicial.component.html',
  styleUrls: ['./modal-zoom-carta-inicial.component.scss']
})
export class ModalZoomCartaInicialComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalZoomCartaInicialComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: CartaInicio
    ) { }
  ngOnInit(): void {
  }
  
  fecharZoom() {
    this.dialogRef.close();
  }
}
