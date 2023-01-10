import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NovaCategoriaCartasDoJogoDTO } from 'src/app/dto/NovaCategoriaCartasDoJogoDTO';
import { NovaCategoriaDTO } from 'src/app/dto/NovaCategoriaDTO';
import { CartaDoJogoEnumCategoria } from 'src/app/enum/CartaDoJogoEnumCategoria';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { JogadorService } from 'src/app/service/jogador-service/jogador.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa-service/mesa.service';

@Component({
  selector: 'app-seleciona-categoria',
  templateUrl: './seleciona-categoria.component.html',
  styleUrls: ['./seleciona-categoria.component.scss']
})
export class SelecionaCategoriaComponent implements OnInit {
  private hash = '';
  public sala: Sala = {} as Sala;
  public jogador: Jogador = {} as Jogador;

  novaCategoriaDTO: NovaCategoriaDTO;

  cartasCategoriasAtualizadas: Array<NovaCategoriaDTO> = [];
  novaCategoria!: FormGroup;
  @Input() idCartaAtualizaCategoria!: string;
  @Input() desabilitaFormulario!: boolean;
  @Output() novaCategorias = new EventEmitter<NovaCategoriaDTO>();

  enumCategoria = CartaDoJogoEnumCategoria;

  constructor(
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService,
    private jogadorService: JogadorService
  ) {
    this.novaCategoriaDTO = {
      cartaID: '',
      novaCategoria: this.enumCategoria.VAZIA
    }
  }

  ngOnInit(): void {
    // FORMULARIO
    this.novaCategoria = new FormGroup({
      categoria: new FormControl(CartaDoJogoEnumCategoria.VAZIA, Validators.required),
    });
    
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
        this.sala = sala;
        this.jogador = jogador;
        this.mesaJogoService.setJogadorAtualNaMesa(this.jogador);
      });
    });

    this.mesaService.findByHash(this.hash).subscribe((val) => {
      this.sala = val
    });

  }

  public enviarCategorias(): void {
    this.novaCategoriaDTO = {
      cartaID: this.idCartaAtualizaCategoria,
      novaCategoria: this.novaCategoria.value.categoria
    }
    this.novaCategorias.emit(this.novaCategoriaDTO);
    this.desabilitaFormulario;
  }

  public desabilitarFormulario(){
    if (this.jogador.id != null){
      this.jogadorService.procurarJogador(this.jogador.id).subscribe((jogador)=>{
        this.jogador = jogador})
    }

    if (this.jogador.status == 'FINALIZADO'){
      return true;
    }
    return false;
  }
}
