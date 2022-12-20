import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-zoom-objetivo',
  templateUrl: './modal-zoom-objetivo.component.html',
  styleUrls: ['./modal-zoom-objetivo.component.scss']
})
export class ModalZoomObjetivoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalZoomObjetivoComponent>) { }

  ngOnInit(): void {
  }

  fecharZoom() {
    this.dialogRef.close();
  }

}
