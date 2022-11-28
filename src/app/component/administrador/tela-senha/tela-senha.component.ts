import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminSenha } from 'src/app/model/adminSenha';
import { AdminService } from 'src/app/service/admin-service/admin.service';
import { ModalService } from 'src/app/service/modal-service/modal.service';

@Component({
  selector: 'app-tela-senha',
  templateUrl: './tela-senha.component.html',
  styleUrls: ['./tela-senha.component.scss'],
})
export class TelaSenhaComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private adminService: AdminService,
    private router: Router
  ) {
    this.adminSenha = {} as AdminSenha;
  }

  ngOnInit() {
    this.adminService.listarAdmin().subscribe((novoAdmin) => {
      if (novoAdmin.length === 0) {
        this.router.navigate(['/primeiroacesso']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  adminSenha: AdminSenha;
  senha = new UntypedFormControl('');
  logado: boolean = false;

  abrirModal(id: string) {
    this.modalService.abrir(id);
  }

  fecharModal(id: string) {
    this.modalService.fechar(id);
  }

  validar() {
    this.adminSenha.senha = this.senha.value;
    this.adminService.loginAdmin(this.adminSenha).subscribe((verificacao) => {
      this.logado = verificacao.logado;
      if (this.logado == true) {
        this.router.navigate(['/menu']);
      } else {
        this.abrirModal('mensagemErro');
      }
    });
  }
}
