import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { ModalService } from 'src/app/service/modal-service/modal.service';

@Component({
  selector: 'app-area-jogadores',
  templateUrl: './area-jogadores.component.html',
  styleUrls: ['./area-jogadores.component.scss'],
})
export class AreaJogadoresComponent implements OnInit {
  jogadores: Jogador[] = new Array();
  sala: Sala = {} as Sala;
  jogadorPrincipal: Jogador = {} as Jogador;
  public jogadorModal: Jogador = {} as Jogador;

  constructor(
    private modal: ModalService,
    private mesaJogoService: MesaJogoService
  ) {}

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
        this.jogadorPrincipal = jogador;

        this.sala = sala;
        this.jogadores = sala.jogadores?.filter(
          (jogador) => jogador.id != this.jogadorPrincipal.id
        );
      });
    });
  }
  abrirModal(jogador: Jogador) {
    this.jogadorModal = jogador;
    this.modal.abrir('mao-jogador');
  }

  fecharModal() {
    this.modal.fechar('mao-jogador');
  }
}
