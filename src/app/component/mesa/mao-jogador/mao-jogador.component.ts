import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { mapTipoCartaDoJogo } from 'src/app/maps/cartaDoJogoMaps';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { AreaDeCompraService } from 'src/app/service/area-de-compra-service/area-de-compra.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa-service/mesa.service';
import { ModalZoomObjetivoComponent } from '../modal-zoom-objetivo/modal-zoom-objetivo.component';
import { ModalZoomComponent } from '../modal-zoom/modal-zoom.component';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-mao-jogador',
  templateUrl: './mao-jogador.component.html',
  styleUrls: ['./mao-jogador.component.scss'],
})
export class MaoJogadorComponent implements OnInit {
  private hash = '';
  public sala: Sala = {} as Sala;
  public listaJogador: Jogador[] = [];
  public jogador: Jogador = {} as Jogador;
  public listacartasMao: Array<CartaDoJogo> = [];

  public mapTipo = mapTipoCartaDoJogo;

  constructor(
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService,
    private areaCompraService: AreaDeCompraService,
    public zoomCarta: MatDialog,
  ) {}

  ngOnInit(): void {
    // caminho para acessar a partir de outros componentes
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
        this.sala = sala;
        this.jogador = jogador;
        this.escutaEventoCompra();
        this.mesaJogoService.setJogadorAtualNaMesa(this.jogador);
      });
    });

    this.mesaService.findByHash(this.hash).subscribe((val) => {
      this.sala = val;
    });
  }

  public escutaEventoCompra(): void {
    this.areaCompraService.emitirCartaJogo.subscribe(
      (listacartasMao: CartaDoJogo[]) =>
        (this.jogador.cartasDoJogo = listacartasMao)
    );
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.jogador = this.sala.jogadores?.find(
        (jogador) => jogador.id == this.jogador?.id
      ) as Jogador;
    });
  }

  public verificaCompra({
    valorCoracaoPequeno,
    valorCoracaoGrande,
  }: Partial<CartaDoJogo>): boolean {
    let coracaoP = 0;
    let coracaoG = 0;
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      coracaoP = jogador.coracaoPequeno + jogador.bonusCoracaoPequeno;
      coracaoG = jogador.coracaoGrande + jogador.bonusCoracaoGrande;
    });
    return valorCoracaoPequeno! <= coracaoP && valorCoracaoGrande! <= coracaoG;
  }

  public abrirZoom(event: Event, cartas: CartaDoJogo) {
    event.stopPropagation();
    this.zoomCarta.open(ModalZoomComponent, {
      data: cartas,
      height: '90%',
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
}
