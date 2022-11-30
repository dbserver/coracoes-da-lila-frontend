import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';

@Component({
  selector: 'app-primeiro-jogador',
  templateUrl: './primeiro-jogador.component.html',
  styleUrls: ['./primeiro-jogador.component.scss']
})
export class PrimeiroJogadorComponent implements OnInit {
  jogadores: Jogador[] = new Array();
  sala: Sala = {} as Sala;
  jogadorPrincipal: Jogador = {} as Jogador;
  public jogadorModal: Jogador = {} as Jogador;


  constructor(
    private mesaJogoService: MesaJogoService
  ) { }

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
        this.jogadorPrincipal = jogador;

        this.sala = sala;
        this.jogadores = sala.jogadores;
      });
    });
  }
  visibilidade(id:number){
    var x = document.getElementById(`icone-coracao-${id}`);
    var y = document.getElementsByClassName("icone-coracao");

    // for (let index = 0; index < y.length; index++) {
    //   const element = y[index];
    //   y.style.visibility ="hidden";

    // }

    console.log(y[0]);
    console.log(x);
    if(x == null){
      x = null;
    }else{
      if(x.style.visibility == "visible"){
        x.style.visibility ="hidden";
    }else {
        x.style.visibility ="visible";
    }

  }
}
}
