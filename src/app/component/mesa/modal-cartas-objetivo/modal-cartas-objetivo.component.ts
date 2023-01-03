import { MatDialog } from '@angular/material/dialog';
import { ModalZoomObjetivoComponent } from '../modal-zoom-objetivo/modal-zoom-objetivo.component';
import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { AreaDeCompraComponent } from '../area-de-compra/area-de-compra.component';

@Component({
  selector: 'app-modal-cartas-objetivo',
  templateUrl: './modal-cartas-objetivo.component.html',
  styleUrls: ['./modal-cartas-objetivo.component.scss']
})
export class ModalCartasObjetivoComponent implements OnInit {

  @Input() cartasObjetivo: CartaObjetivo[] = [];
  @Input() sala: Sala = {} as Sala;
  cartaEscolhida: CartaObjetivo;
  @Output() embaralharCartas = new EventEmitter<boolean>();
  

  constructor(
    private mesaJogoService: MesaJogoService,
    public zoomCarta: MatDialog
    ) {
    this.cartaEscolhida = {} as CartaObjetivo;
  }

  ngOnInit(): void {
  }

  public escolherCartaObjetivo(cartaObjetivo: CartaObjetivo){
    this.sala.cartaObjetivoEscolhida = cartaObjetivo;
   
    this.mesaJogoService.compraCartaObjetivoEscolhida(this.sala).subscribe(
      (sala) => (
        this.sala = sala
      ))
    this.fecharModal();
  }

  public fecharModal(){
    const modal = document.getElementById("modal");
    if (modal != null)
      modal.style.display = 'none';
      this.cartasObjetivo.length = 0;
    this.embaralharCartas.emit(true);
  }

  public zoomObjetivo(event: Event, cartaObjetivo: CartaObjetivo) {
    event.stopPropagation();
    this.zoomCarta.open(ModalZoomObjetivoComponent, {
      data: cartaObjetivo,
      height: '60%',
      width: '50%',
      panelClass: 'css-carta'
    });
  }
}