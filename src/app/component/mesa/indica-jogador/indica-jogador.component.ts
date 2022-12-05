import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indica-jogador',
  templateUrl: './indica-jogador.component.html',
  styleUrls: ['./indica-jogador.component.scss']
})
export class IndicaJogadorComponent implements OnInit {
@Input() mensagem = '';


  constructor() { }

  ngOnInit(): void {
  }

}
