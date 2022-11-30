import { Component, Input, OnInit } from '@angular/core';
import { Baralho } from 'src/app/model/baralho';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';

@Component({
  selector: 'app-carta-objetivo',
  templateUrl: './carta-objetivo.component.html',
  styleUrls: ['./carta-objetivo.component.scss']
})

export class CartaObjetivoComponent implements OnInit {

  @Input() recebeCartasObjetivo: CartaObjetivo [];

  constructor() { 
    this.recebeCartasObjetivo = [] as CartaObjetivo [];
  }

  ngOnInit(): void {
    //Array de cartas recebidas do backend já embaralhadas
    //console.log(this.recebeCartasObjetivo)
  }
}
