import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, pipe, tap, throwError } from 'rxjs';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa-service/mesa.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mesa-criada',
  templateUrl: './mesa-criada.component.html',
  styleUrls: ['./mesa-criada.component.scss'],
})
export class MesaCriadaComponent implements OnInit {
  sala: Sala;
  hash: string;
  link: string;

  carregando: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private mesaService: MesaService,
    private router: Router
  ) {
    this.sala = {} as Sala;
    this.hash = '';
    this.link = '';
  }

  ngOnInit(): void {
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    //link é: url do site + rota do componente da US030 + hash
    this.link = `${environment.CLIENT_URL}entrarmesa/${this.hash}`;
    this.mesaService
      .findByHash(this.hash)
      .pipe(
        tap(console.log),
        catchError(this.tratarErro))
      .subscribe((sala) => (this.sala = sala));
  }

  roteamento() {
    this.carregando = true;
    this.router.navigate(['/jogo', this.sala.hash])
  }

  
  private tratarErro(error: HttpErrorResponse): Observable<never> {
    this.router.navigate(['/erro/sala'])
    return throwError(`Ocorreu um erro - codigo do erro: ${error.status}`);
  }
}
