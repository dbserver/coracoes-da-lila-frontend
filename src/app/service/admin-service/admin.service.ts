import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminSenha } from '../../model/adminSenha';
import { Admin } from '../../model/admin';
import { Observable } from 'rxjs';
import { Autenticacao } from '../../model/autenticacao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  URLApi: string = environment.API_URL;
  URLAdmin: string = this.URLApi + 'admin';
  URLLogin: string = this.URLApi + 'login';

  constructor(private http: HttpClient) {}

  cadastroAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.URLAdmin, admin);
  }

  loginAdmin(senha: AdminSenha): Observable<Autenticacao> {
    return this.http.post<Autenticacao>(this.URLLogin, senha);
  }

  listarAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.URLAdmin);
  }
}
