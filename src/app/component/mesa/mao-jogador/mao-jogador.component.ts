import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder,
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService,
    private areaCompraService: AreaDeCompraService,
  ) {}

  ngOnInit(): void {
    //FORMULARIO
    this.novaCategoria = this.formBuilder.group({
      categoria: [null],
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
    console.log(this.jogador.cartasDoJogo);
    //this.mesaJogoService.atualizarCategoria(this.nov.value.categoria);
  }

  public atualizarCategorias(): void {
    for(let i = 0; i < this.jogador.cartasDoJogo.length; i++){
      if(this.jogador.cartasDoJogo[i].categoria == "Genérica" && this.jogador.cartasDoJogo[i].novaCategoria == null){
        this.jogador.cartasDoJogo[i].novaCategoria = this.novaCategoria.value.categoria;
        this.cartasParaEnviar.push(this.jogador.cartasDoJogo[i]);
        break;
      }

      if(this.jogador.cartasDoJogo[i].categoria == "Genérica" && this.jogador.cartasDoJogo[i].novaCategoria != null){
        this.jogador.cartasDoJogo[i].novaCategoria = this.novaCategoria.value.categoria;
        this.cartasParaEnviar.push(this.jogador.cartasDoJogo[i]);
        break;
      }
    }

    console.log(this.cartasParaEnviar);
    console.log(this.jogador.cartasDoJogo);
  }

}
