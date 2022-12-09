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

  constructor(private mesaJogoService: MesaJogoService) {

  }

  ngOnInit(): void {

  }

  public comprarCarta(){
    this.fecharModal();
  }

  public fecharModal(){
    const modal = document.getElementById("modal");
    if (modal != null)
      modal.style.display = 'none';
  }
}
