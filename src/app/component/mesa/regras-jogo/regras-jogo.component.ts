import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal-service/modal.service';

@Component({
  selector: 'app-regras-jogo',
  templateUrl: './regras-jogo.component.html',
  styleUrls: ['./regras-jogo.component.scss']
})
export class RegrasJogoComponent implements OnInit {

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }

  abrirModal() {
    this.modal.abrir('regras-jogo');
  }

  fecharModal() {
    this.modal.fechar('regras-jogo');
  }

}
