import { CartaService } from './../../../service/cartas-service/cartas.service';
import { CartaInicio } from './../../../model/cartaInicio';
import { Component, Input, OnInit } from '@angular/core';
import { Sala } from 'src/app/model/sala';
import { Baralho } from 'src/app/model/baralho';
import { ModalZoomCartaInicialComponent } from '../modal-zoom-carta-inicial/modal-zoom-carta-inicial.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carta-inicio',
  templateUrl: './carta-inicio.component.html',
  styleUrls: ['./carta-inicio.component.scss']
})
export class CartaInicioComponent implements OnInit {

  @Input() recebeCartaInicio: CartaInicio;

  constructor(
    private cartaSevice : CartaService,
    public zoomCarta: MatDialog,) {
    this.recebeCartaInicio = {} as CartaInicio;
  }

  ngOnInit(): void {

  }

  public abrirZoom(event: Event) {
    event.stopPropagation();
    this.zoomCarta.open(ModalZoomCartaInicialComponent, {
      data: this.recebeCartaInicio,
      height: '20rem',
      width: '48%',
      panelClass: 'carta-inicio'
    });
  }
}
