import { Component, Input, OnInit } from '@angular/core';
import { CartaDoJogo } from '../../model/cartaDoJogo';
import { CartaDoJogoEnumTipo } from 'src/app/enum/CartaDoJogoEnumTipo';
import { MatDialog } from '@angular/material/dialog';
import { ModalZoomComponent } from '../mesa/modal-zoom/modal-zoom.component';
import { mapTipoCartaDoJogo } from 'src/app/maps/cartaDoJogoMaps';

@Component({
  selector: 'app-montar-cartas',
  templateUrl: './montar-cartas.component.html',
  styleUrls: ['./montar-cartas.component.scss'],
})
export class MontarCartasComponent implements OnInit {
  @Input() carta: CartaDoJogo = {} as CartaDoJogo;
  public mapTipo = mapTipoCartaDoJogo;
  public enumTipo = CartaDoJogoEnumTipo;

  constructor(public zoomCarta: MatDialog,) {}

  ngOnInit() {
  }

  public abrirZoom(event: Event, carta: CartaDoJogo) {
    event.stopPropagation();
    this.zoomCarta.open(ModalZoomComponent, {
      data: carta,
      height: '92%',
      width: '35%',
      panelClass: 'css-carta'
    });
  }
}
