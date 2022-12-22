import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { ModalZoomObjetivoComponent } from '../modal-zoom-objetivo/modal-zoom-objetivo.component';
import { ModalZoomComponent } from '../modal-zoom/modal-zoom.component';

@Component({
  selector: 'app-modal-cartas-objetivo',
  templateUrl: './modal-cartas-objetivo.component.html',
  styleUrls: ['./modal-cartas-objetivo.component.scss']
})
export class ModalCartasObjetivoComponent implements OnInit {

  @Input() cartasObjetivo: CartaObjetivo[] = [];
  @Input() sala: Sala = {} as Sala;
  cartaEscolhida: CartaObjetivo;
  

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
  }

  public abrirZoom(event: Event, cartas: CartaObjetivo) {
    event.stopPropagation();
    this.zoomCarta.open(ModalZoomComponent, {
      data: cartas,
      height: '90%',
      width: '33%',
      panelClass: 'css-carta'
    });
  }

  public zoomObjetivo(event: Event, cartas: CartaObjetivo) {
    event.stopPropagation();
    
    this.zoomCarta.open(ModalZoomObjetivoComponent, {
      data: cartas,
      height: '60%',
      width: '80%',
      panelClass: 'css-carta'
    });
  }

}
