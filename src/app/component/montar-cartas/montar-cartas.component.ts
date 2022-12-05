import { Component, OnInit } from '@angular/core';
import { CartaDoJogo } from '../../model/cartaDoJogo';
import { CartaInicio } from '../../model/cartaInicio';
import { CartaObjetivo } from '../../model/cartaObjetivo';
import { CartaService } from '../../service/cartas-service/cartas.service';


@Component({
  selector: 'app-montar-cartas',
  templateUrl: './montar-cartas.component.html',
  styleUrls: ['./montar-cartas.component.scss'],
})
export class MontarCartasComponent implements OnInit {
  public listaCartas: Array<CartaDoJogo> = [];
  public listaCartasInicio: Array<CartaInicio> = [];
  public listaCartasObjetivo: Array<CartaObjetivo> = [];
  public listaRandomicaCartas: Array<CartaDoJogo> = [];



  constructor(private cartaService: CartaService) {}

  ngOnInit() {
    this.getListarCartas();
    this.getListarCartasInicio();
    this.getListarCartasObjetivo();
  }

  public setmaocartas(): void{


  }

  public setListaRandomica(): void {
    const cartasFaltantes: number = 6 - this.listaRandomicaCartas.length;

    for (let i = 0; i < cartasFaltantes; i++) {
      const indiceRandomico: number = Math.round(Math.random() * ((this.listaCartas.length - 1) - 0) + 0);
      this.listaRandomicaCartas.push(this.listaCartas[indiceRandomico]);
      this.listaCartas.splice(indiceRandomico, 1);
    }
  }

  private getListarCartas(): void {
    this.cartaService.getListarCarta().subscribe((listaCartas: CartaDoJogo[]) => {
      this.listaCartas = listaCartas;
    });
  }
  private getListarCartasInicio(): void {
    this.cartaService
      .getListarCartaInicio()
      .subscribe((listaCartasInicio: CartaInicio[]) => {
        this.listaCartasInicio = listaCartasInicio;
      });
  }
  private getListarCartasObjetivo(): void {
    this.cartaService
      .getListarCartaObjetivo()
      .subscribe((listaCartasObjetivo: CartaObjetivo[]) => {
        this.listaCartasObjetivo = listaCartasObjetivo;
      });
  }
}
