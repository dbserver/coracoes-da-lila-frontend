import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacao-carta',
  templateUrl: './animacao-carta.component.html',
  styleUrls: ['./animacao-carta.component.scss']
})
export class AnimacaoCartaComponent implements OnInit {

  cartas : number[] = [1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
