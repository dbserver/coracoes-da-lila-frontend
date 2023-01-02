import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-v-libras',
  templateUrl: './v-libras.component.html',
  styleUrls: ['./v-libras.component.scss']
})
export class VLibrasComponent implements OnInit {
  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        this.href = route.url
      }
    })
  }

  adicionarClasse() {
    const padrao = /\/jogo\//gm;

    return padrao.test(this.href);
  }
}
