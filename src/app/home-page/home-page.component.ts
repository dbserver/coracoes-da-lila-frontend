import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  loading = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  irParaRegras() {
    this.router.navigate(['/regras'])
  }

  loadingCriarPartida():void {
    this.loading = true;
  }
}
