import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal-service/modal.service';

@Component({
  selector: 'app-guia-rapido',
  templateUrl: './guia-rapido.component.html',
  styleUrls: ['./guia-rapido.component.scss']
})
export class GuiaRapidoComponent implements OnInit {

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }

  abrirModal() {
    this.modal.abrir('guia-rapido');
  }

  fecharModal() {
    this.modal.fechar('guia-rapido');
  }
}
