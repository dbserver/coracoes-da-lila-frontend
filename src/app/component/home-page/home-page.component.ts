import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartaDoJogoEnumTipo } from 'src/app/enum/CartaDoJogoEnumTipo';
import { MesaService } from 'src/app/service/mesa-service/mesa.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
}) 
export class HomePageComponent implements OnInit {
  carregando = false;

  constructor( private router: Router, 
  private mesaService: MesaService, 
    ) { }

  ngOnInit(): void {
  }

  irParaRegras() {
    this.router.navigate(['/regras'])
  }

  loadingCriarPartida():void {
    this.carregando = true;
    this.router.navigate(['/mesa']);
  }



}
