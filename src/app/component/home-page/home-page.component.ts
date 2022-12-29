import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
}) 
export class HomePageComponent implements OnInit {
  carregando = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
    if(localStorage.length > 0)
    localStorage.removeItem('esconder');
    
  }

  irParaRegras() {
    this.router.navigate(['/regras'])
  }

  loadingCriarPartida():void {
    this.carregando = true;
    this.router.navigate(['/mesa']);
  }

}
