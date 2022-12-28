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
import { SalaRequestNovaCategoriaDTO } from 'src/app/model/dto/salaRequestNovaCategoriaDTO';
import { NovaCategoriaDTO } from 'src/app/model/dto/novaCategoriaDTO';

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

  novaCategoriaDTO: NovaCategoriaDTO = {
    cartaModificadaID: '',
    enumCategoria: ''
  };

  cartasCategoriasAtualizadas: Array<NovaCategoriaDTO> = [];
  novaCategoria!: FormGroup;

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

  public enviarCategorias(): void {

    let salaRequestNovaCategoriaDTO: SalaRequestNovaCategoriaDTO = {
      jogadorID: this.jogador.id,
      salaHash: this.sala.hash,
      listaCartasParaAtualizar: this.cartasCategoriasAtualizadas
    };

    console.log(this.cartasCategoriasAtualizadas)

    this.mesaJogoService.enviarJogadorParaFinalizar(salaRequestNovaCategoriaDTO).subscribe((sala) => (this.sala = sala));
  }

  public verificaCartaJaExistente(cartaGenerica: CartaDoJogo, novaCategoriaRecebida: string): boolean{
   
    for (let i = 0; i < this.cartasCategoriasAtualizadas.length; i++){
      if (this.cartasCategoriasAtualizadas[i].cartaModificadaID == cartaGenerica.id){
          this.novaCategoriaDTO.cartaModificadaID = cartaGenerica.id;
          this.novaCategoriaDTO.enumCategoria = novaCategoriaRecebida;
          this.cartasCategoriasAtualizadas[i] = this.novaCategoriaDTO;
          return true;
      }
    }
    return false;
  }

  
  public atualizarCategorias(cartaGenerica: CartaDoJogo): void {

    let novaCategoriaRecebida:string = this.novaCategoria.value.categoria;

    if (this.verificaCartaJaExistente(cartaGenerica, novaCategoriaRecebida) == false){
      this.novaCategoriaDTO.cartaModificadaID = cartaGenerica.id;
      this.novaCategoriaDTO.enumCategoria = novaCategoriaRecebida;
      this.cartasCategoriasAtualizadas.push(this.novaCategoriaDTO);
    }

    this.novaCategoriaDTO = {
      cartaModificadaID: '',
      enumCategoria: ''
    }
    console.log(this.cartasCategoriasAtualizadas);
  }

  public bloquearConfirmarCategorias(): boolean {
    let quantidadeCartasGenericas = 0;
    for(let i = 0; i < this.jogador.cartasDoJogo.length; i++){
      if(this.jogador.cartasDoJogo[i].categoria == "GENERICA"){
        quantidadeCartasGenericas++;
      }
    }
    if (quantidadeCartasGenericas == this.cartasCategoriasAtualizadas.length){
      return false;
    }
    return true;
  }

}
