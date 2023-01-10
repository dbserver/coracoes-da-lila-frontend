import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
import { NovaCategoriaCartasDoJogoDTO } from 'src/app/dto/NovaCategoriaCartasDoJogoDTO';
import { NovaCategoriaDTO } from 'src/app/dto/NovaCategoriaDTO';
import { CartaDoJogoEnumCategoria } from 'src/app/enum/CartaDoJogoEnumCategoria';
import { CartaDoJogoEnumTipo } from 'src/app/enum/CartaDoJogoEnumTipo';
import { ModalZoomObjetivoComponent } from '../modal-zoom-objetivo/modal-zoom-objetivo.component';
import { ModalZoomComponent } from '../modal-zoom/modal-zoom.component';
import { SelecionaCategoriaComponent } from '../seleciona-categoria/seleciona-categoria.component';

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
  public recebeNovaCategoria!: NovaCategoriaDTO;
  public mapTipo = mapTipoCartaDoJogo;

  novaCategoriaCartasDoJogoDTO!: NovaCategoriaCartasDoJogoDTO;

  cartasCategoriasAtualizadas: Array<NovaCategoriaDTO> = [];
  novaCategoria!: FormGroup;
  enviaDesabilitaFormulario!: boolean;

  enumCategoria = CartaDoJogoEnumCategoria;
  enumTipo = CartaDoJogoEnumTipo;

  constructor(
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService,
    private areaCompraService: AreaDeCompraService,
    public zoomCarta: MatDialog,
    public selecionarCategoriaComponent: SelecionaCategoriaComponent
  ) {

  }

  ngOnInit(): void {
    // FORMULARIO

    this.novaCategoria = new FormGroup({
      categoria: new FormControl(CartaDoJogoEnumCategoria.VAZIA, Validators.required),
    });

    this.novaCategoriaCartasDoJogoDTO = {
      jogadorID: '',
      salaHash: '',
      listaDeCartas: [],
    }

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

  public enviarCategorias(): void {
    this.novaCategoriaCartasDoJogoDTO.jogadorID = this.jogador.id;
    this.novaCategoriaCartasDoJogoDTO.salaHash = this.sala.hash;
    this.enviaDesabilitaFormulario = true;
    this.mesaJogoService.enviarJogadorParaFinalizar(this.novaCategoriaCartasDoJogoDTO).subscribe((sala) => (this.sala = sala));
  }

  public verificaCartaExisteNaListaDeCartas(idCartaDoJogo: string): boolean{

    for (let i = 0; i < this.novaCategoriaCartasDoJogoDTO.listaDeCartas.length; i++){
      if (this.novaCategoriaCartasDoJogoDTO.listaDeCartas[i].cartaID == idCartaDoJogo){
        return true;
      }
    }
    return false;
  }

  public verificaSeCategoriaGenerica(cartaDoJogo: CartaDoJogo){
    return cartaDoJogo.categoria == this.enumCategoria.GENERICA ? true: false;
  }

  public atualizaCategoriaDeCartasGenericas(novaCategoriaDTO: NovaCategoriaDTO): void {

    let categoria: string = novaCategoriaDTO.novaCategoria;
    let novaCategoriaEnum: CartaDoJogoEnumCategoria = (<any>CartaDoJogoEnumCategoria)[categoria]

    if (this.verificaCartaExisteNaListaDeCartas(novaCategoriaDTO.cartaID) == false){
      this.novaCategoriaCartasDoJogoDTO.listaDeCartas.push(
        {
          cartaID: novaCategoriaDTO.cartaID,
          novaCategoria: novaCategoriaEnum
        } as NovaCategoriaDTO
      );
    } else {
      for(let i = 0; i < this.novaCategoriaCartasDoJogoDTO.listaDeCartas.length; i++){
        if (this.novaCategoriaCartasDoJogoDTO.listaDeCartas[i].cartaID == novaCategoriaDTO.cartaID){
          this.novaCategoriaCartasDoJogoDTO.listaDeCartas[i].novaCategoria = novaCategoriaEnum;
        }
      }
    }
  }

  public habilitaSelecionarCategoria(cartaDoJogo: CartaDoJogo){
    if (cartaDoJogo.categoria == 'GENERICA'){
      if (this.sala.status == 'AGUARDANDO_DEFINICAO' || this.sala.status == 'FINALIZADO'){
        return true;
      }
    }
    return false;
  }

  public recebeNovasCategorias(novasCategorias: NovaCategoriaDTO){
    this.atualizaCategoriaDeCartasGenericas(novasCategorias);
  }

  public bloquearConfirmarCategorias(): boolean {
    let quantidadeCartasGenericas = 0;

    this.jogador.cartasDoJogo.forEach(cartaDoJogo => {
      if (cartaDoJogo.categoria == CartaDoJogoEnumCategoria.GENERICA){
        quantidadeCartasGenericas++
      }
    });

    if (quantidadeCartasGenericas == this.novaCategoriaCartasDoJogoDTO.listaDeCartas.length){
      return false;
    }
    return true;
  }

  public bloqueiaFormulario(){

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
