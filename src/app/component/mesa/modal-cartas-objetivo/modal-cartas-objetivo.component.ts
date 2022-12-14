import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';

@Component({
  selector: 'app-modal-cartas-objetivo',
  templateUrl: './modal-cartas-objetivo.component.html',
  styleUrls: ['./modal-cartas-objetivo.component.scss']
})
export class ModalCartasObjetivoComponent implements OnInit {

  @Input() cartasObjetivo: CartaObjetivo[] = [];
  @Input() sala: Sala = {} as Sala;
  cartaEscolhida: CartaObjetivo;
  

  constructor(private mesaJogoService: MesaJogoService) {
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
}
