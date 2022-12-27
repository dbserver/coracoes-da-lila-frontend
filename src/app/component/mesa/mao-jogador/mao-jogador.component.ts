import { HttpParams } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { mapTipoCartaDoJogo } from 'src/app/maps/cartaDoJogoMaps';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { AreaDeCompraService } from 'src/app/service/area-de-compra-service/area-de-compra.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa-service/mesa.service';

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

  cartasParaEnviar: Array<CartaDoJogo> = [];
  novaCategoria!: FormGroup;
  public mapTipo = mapTipoCartaDoJogo;

  constructor(
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService,
    private areaCompraService: AreaDeCompraService,
  ) {}

  ngOnInit(): void {
    //FORMULARIO
    this.novaCategoria = new FormGroup({
      categoria: new FormControl('', Validators.required),
    });
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

  //TODO: Desabilitar o botão de confirmar categorias se o jogador ainda não tiver escolhido as categorias
  //Atualmente o jogador pode "confirmar" sem escolher as categorias

  public enviarCategorias(): void {
    for(let i = 0; i < this.cartasParaEnviar.length; i++){
      for(let j = 0; j < this.jogador.cartasDoJogo.length; j++){
        if(this.jogador.cartasDoJogo[j].categoria == "Genérica" && this.jogador.cartasDoJogo[j].texto == this.cartasParaEnviar[i].texto){
          this.jogador.cartasDoJogo[j].novaCategoria = this.cartasParaEnviar[i].novaCategoria;
        }
      }
    }

    let parametros = [] as String[];
  
    parametros[0] = this.sala.hash;
    parametros[1] = `${this.jogador.id}`;

    this.mesaJogoService.enviarJogadorParaFinalizar(parametros).subscribe((sala) => (this.sala = sala));
  }

  public atualizarCategorias(cartaGenerica: CartaDoJogo): void {
    let dadoRecebido:string = this.novaCategoria.value.categoria;
    if(cartaGenerica.novaCategoria == null){
      cartaGenerica.novaCategoria = dadoRecebido;
      this.cartasParaEnviar.push(cartaGenerica);
    }

    if(cartaGenerica.novaCategoria != dadoRecebido){
      for(let i = 0; i < this.cartasParaEnviar.length; i++){
        if(this.cartasParaEnviar[i] == cartaGenerica){
          cartaGenerica.novaCategoria = dadoRecebido;
          this.cartasParaEnviar[i] = cartaGenerica;
        }
      }
    }
  }

  public bloquearConfirmarCategorias(): boolean {  
    let retorno = false;
    for(let i = 0; i < this.jogador.cartasDoJogo.length; i++){
      if(this.jogador.cartasDoJogo[i].categoria == "Genérica" && this.jogador.cartasDoJogo[i].novaCategoria == null){
        retorno = true;
      }
    }
    return retorno;
  }

}
