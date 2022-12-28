import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { mapTipoCartaDoJogo } from 'src/app/maps/cartaDoJogoMaps';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { ModalService } from 'src/app/service/modal-service/modal.service';
import { ModalZoomObjetivoComponent } from '../modal-zoom-objetivo/modal-zoom-objetivo.component';
import { ModalZoomComponent } from '../modal-zoom/modal-zoom.component';

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
  cartas: CartaDoJogo = {} as CartaDoJogo;
  cartaObjetivo: CartaObjetivo = {} as CartaObjetivo;

  public mapTipo = mapTipoCartaDoJogo;

  constructor(
    private modal: ModalService,
    private mesaJogoService: MesaJogoService,
    public zoomCarta: MatDialog,
  ) {}

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
        this.jogadorPrincipal = jogador;

        this.sala = sala;
        this.jogadores = sala.jogadores?.filter(
          (jogador) => jogador.nome != this.jogadorPrincipal.nome
        );
      });
    });
  }
  abrirModal(jogador: Jogador) {
    this.jogadorModal = jogador;
    this.modal.abrir('mao-jogador');
  }

  public abrirZoom(event: Event, carta: CartaDoJogo) {
    event.stopPropagation();
    this.zoomCarta.open(ModalZoomComponent, {
      data: carta,
      height: '92%',
      width: '35%',
      panelClass: 'css-carta'
    });
  }

  public zoomObjetivo(event: Event, cartaObjetivo: CartaObjetivo) {
    event.stopPropagation();
    
    this.zoomCarta.open(ModalZoomObjetivoComponent, {
      data: cartaObjetivo,
      height: '60%',
      width: '50%',
      panelClass: 'css-carta'
    });
  }
  
  fecharModal() {
    this.modal.fechar('mao-jogador');
  }
}
