import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';

@Component({
  selector: 'app-modal-zoom',
  templateUrl: './modal-zoom.component.html',
  styleUrls: ['./modal-zoom.component.scss']
})
export class ModalZoomComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<ModalZoomComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: CartaDoJogo
  ) { }

  ngOnInit(): void {
  }

  fecharZoom() {
    this.dialogRef.close();
  }

}
