import { CartaService } from './../../service/cartas.service';
import { CartaInicio } from './../../model/cartaInicio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta-inicio',
  templateUrl: './carta-inicio.component.html',
  styleUrls: ['./carta-inicio.component.scss']
})
export class CartaInicioComponent implements OnInit {

  public listarCartaInicio :CartaInicio | undefined;

  constructor(private cartaService:CartaService) {
   }

  ngOnInit(): void {
    this.getCartaInicio();
  }

   private getCartaInicio(): void{
    this.cartaService
    .getCartaInicio()
    .subscribe((cartaInicio : CartaInicio) =>{
      console.table()
      this.listarCartaInicio = cartaInicio;
    } , error => console.log(error));
  }

}
