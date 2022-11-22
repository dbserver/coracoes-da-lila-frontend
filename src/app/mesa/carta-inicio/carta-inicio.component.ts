import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta-inicio',
  templateUrl: './carta-inicio.component.html',
  styleUrls: ['./carta-inicio.component.scss']
})
export class CartaInicioComponent implements OnInit {

  cartaInicio = {
    id:'1',
    nome: 'carta1',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis nisi egestas, porttitor metus vitae, sollicitudin nunc. In euismod felis sit amet lacinia lacinia.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
