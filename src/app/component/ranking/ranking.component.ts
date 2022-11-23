import { Component, OnInit } from '@angular/core';
import { Jogador } from '../../model/jogador';
import { MesaJogoService } from '../../service/mesa-jogo.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  public jogadores : Jogador [];

  constructor(private router: Router, private mesa : MesaJogoService ) {
    this.jogadores = [];
   }

  ngOnInit(): void {
    this.mesa.getemitSalaObservable().subscribe(sala =>{
       this.jogadores = sala.jogadores;
        this.jogadores.sort((JogadorA, JogadorB) => {
          return JogadorB.pontos - JogadorA.pontos;
        });
      });
    }

    irParaHome() {
      this.router.navigate([''])
    }
}
