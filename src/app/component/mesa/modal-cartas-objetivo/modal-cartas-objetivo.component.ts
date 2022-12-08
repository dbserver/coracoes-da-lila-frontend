import { Component, OnInit } from '@angular/core';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';

@Component({
  selector: 'app-modal-cartas-objetivo',
  templateUrl: './modal-cartas-objetivo.component.html',
  styleUrls: ['./modal-cartas-objetivo.component.scss']
})
export class ModalCartasObjetivoComponent implements OnInit {

  public cartasObjetivo: CartaObjetivo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cartasObjetivo.push({
      id: 1,
      baralho: [],
      classificacao: "Uma categoria bem legal aqui",
      pontos: 2,
      categoria: "Uma categoria bem legal aqui",
      descricao: "Uma descrição maior e mais legal aqui",
    })

    this.cartasObjetivo.push({
      id: 1,
      baralho: [],
      classificacao: "Uma categoria bem legal aqui",
      pontos: 2,
      categoria: "Uma categoria bem legal aqui",
      descricao: "Uma descrição maior e mais legal aqui",
    })
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
