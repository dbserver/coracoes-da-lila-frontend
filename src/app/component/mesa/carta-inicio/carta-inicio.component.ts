import { CartaService } from './../../../service/cartas-service/cartas.service';
import { CartaInicio } from './../../../model/cartaInicio';
import { Component, Input, OnInit } from '@angular/core';
import { Sala } from 'src/app/model/sala';
import { Baralho } from 'src/app/model/baralho';

@Component({
  selector: 'app-carta-inicio',
  templateUrl: './carta-inicio.component.html',
  styleUrls: ['./carta-inicio.component.scss']
})
export class CartaInicioComponent implements OnInit {

  @Input() recebeCartaInicio: CartaInicio;

  constructor(private cartaSevice : CartaService) {
    this.recebeCartaInicio = {} as CartaInicio;
  }

  ngOnInit(): void {

  }
}
