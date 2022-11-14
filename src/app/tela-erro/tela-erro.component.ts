import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-erro',
  templateUrl: './tela-erro.component.html',
  styleUrls: ['./tela-erro.component.scss']
})
export class TelaErroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

voltarTelaInicial(){
    this.router.navigate(['/'])
}

}
