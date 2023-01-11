import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  public novaCategoriaDTO: NovaCategoriaDTO;
  public enumCategoria = CartaDoJogoEnumCategoria;
  public categoria!: FormControl;

  @Input() novaCategoriaDessaCarta!: string | undefined;
  @Input() idCartaAtualizaCategoria!: string;
  @Output() novaCategorias = new EventEmitter<NovaCategoriaDTO>();

  constructor(
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService,
  ) {
    this.novaCategoriaDTO = {
      cartaID: '',
      novaCategoria: this.enumCategoria.VAZIA
    }
  }

  ngOnInit(): void {
    // FORMULARIO
    this.categoria = new FormControl(CartaDoJogoEnumCategoria.VAZIA, Validators.required);

    //Se já existir alguma nova categoria selecionada para essa carta
    //o formulário inicia com esse valor e desabilitado
    if(this.novaCategoriaDessaCarta){
      this.categoria.setValue(this.novaCategoriaDessaCarta);
      this.categoria.disable();
    }
    
    //Busca a sala e atualiza conforme o hash
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

  //Enviar a categoria selecionada para o componente MaoJogador
  public enviarCategorias(): void {
    this.novaCategoriaDTO = {
      cartaID: this.idCartaAtualizaCategoria,
      novaCategoria: this.categoria.value
    }
    this.novaCategorias.emit(this.novaCategoriaDTO);
  }
}
