import { Jogador } from './../../../model/jogador';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';

@Component({
  selector: 'app-habilita-dado',
  templateUrl: './habilita-dado.component.html',
  styleUrls: ['./habilita-dado.component.scss'],
})
export class HabilitaDadoComponent implements OnInit {
  @ViewChild('dice')
  public dado: ElementRef<Element> = {} as ElementRef;
  public sala: Sala = {} as Sala;
  public numero: number = 0;
  constructor(private mesaJogoService: MesaJogoService) {}

  desabilitado = true;
  aux: number = -1; // Variavel auxiliar para desabilitar o botão

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.sala = sala;
      if (this.sala.dado != 0) {
        this.animaDado();
      }
    });
  }

  mudaDesabilitado(): boolean{
    let ultimaCarta = this.mesaJogoService.getJogadorAtualNaMesa().cartasDoJogo?.length - 1;
    if(ultimaCarta < 0||this.mesaJogoService.getJogadorAtualNaMesa().status != 'JOGANDO'){
      this.desabilitado = true;
      return this.desabilitado;
    }
    if(!this.mesaJogoService.getJogadorAtualNaMesa().cartasDoJogo[ultimaCarta].bonus){
      this.desabilitado = true;
    }
    if(ultimaCarta >= 0 && this.mesaJogoService.getJogadorAtualNaMesa().cartasDoJogo[ultimaCarta].bonus && this.aux != ultimaCarta){
      this.aux = ultimaCarta;
      this.desabilitado = false;
    }
    return this.desabilitado;
  }
  compraCarta() {
    this.mesaJogoService.comprarCartas(this.sala).subscribe((sala) => {
      this.mesaJogoService.getemitSalaSubject().next(sala);
    });
    const node = this.dado.nativeElement;
    if (node instanceof HTMLElement) {
      this.resetarClasse(node);
    }
    this.desabilitado = true;
  }

  animaDado() {
    const node = this.dado.nativeElement;
    this.numero = this.sala.dado;
    if (node instanceof HTMLElement) {
      this.trocarClasses(node);
      node.dataset['roll'] = this.numero.toString();
    }
  }

  trocarClasses(die: HTMLElement) {
    die.classList.add('even-roll');
  }

  resetarClasse(die: HTMLElement) {
    die.classList.remove('even-roll');
  }

}
