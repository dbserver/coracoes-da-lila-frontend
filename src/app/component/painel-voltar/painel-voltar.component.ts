import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-voltar',
  templateUrl: './painel-voltar.component.html',
  styleUrls: ['./painel-voltar.component.scss']
})
export class PainelVoltarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaHome(){
    this.router.navigate(['/'])
  }

}
