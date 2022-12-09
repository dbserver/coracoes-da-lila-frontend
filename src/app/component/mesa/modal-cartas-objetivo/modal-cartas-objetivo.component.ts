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

  @Input() sala: Sala;
  public cartasObjetivo: CartaObjetivo[] = [];

  constructor(private mesaJogoService: MesaJogoService) { 
    this.sala = {} as Sala;
  }

  ngOnInit(): void {
    console.log("-------- aqui eh o modal---------")
    console.log(this.sala.opcoesCartaObjetivo)
  }

  public comprarCarta(){
    this.fecharModal();
  }

  public fecharModal(){
    const modal = document.getElementById("modal");
    if (modal != null) 
      modal.style.display = 'none';
  }

  public buscaCartasObjetivo(opcoesCartaObjetivo: CartaObjetivo[]){
    this.cartasObjetivo = opcoesCartaObjetivo;
  }
}
