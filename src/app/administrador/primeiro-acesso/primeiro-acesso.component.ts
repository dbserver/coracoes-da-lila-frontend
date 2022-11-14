import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.scss'],
})
export class PrimeiroAcessoComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private adminService: AdminService,
    private router: Router
  ) {
    this.admin = {} as Admin;
  }

  ngOnInit(): void {}

  admin: Admin;

  senha = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,30}'
    ),
  ]);

  confirmaSenha = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,30}'
    ),
  ]);

  enviar(id: string) {
    if (
      this.senha.hasError('required') ||
      this.senha.hasError('pattern') ||
      this.senha.value === '' ||
      this.senha.value !== this.confirmaSenha.value
    ) {
      this.modalService.abrir(id);
    } else {
      this.admin.senha = this.senha.value;
      this.adminService.cadastroAdmin(this.admin).subscribe((novoAdmin) => {
        this.admin = novoAdmin;
      });
      this.modalService.abrir('mensagemSucesso');
    }
  }

  mensagemDeErro() {
    if (this.senha.hasError('required')) {
      return 'Você precisa inserir uma senha';
    }
    return this.senha.hasError('pattern') ? 'Formato de Senha Inválida' : '';
  }

  fecharModal(id: string) {
    this.modalService.fechar(id);
  }
}
