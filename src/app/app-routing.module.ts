import { RegrasComponent } from './component/regras/regras.component';
import { EntrarMesaComponent } from './component/entrar-mesa/entrar-mesa.component';
import { AreaDeCompraComponent } from './component/mesa/area-de-compra/area-de-compra.component';
import { TelaSenhaComponent } from './component/administrador/tela-senha/tela-senha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PrimeiroAcessoComponent } from './component/administrador/primeiro-acesso/primeiro-acesso.component';
import { MenuDoAdminComponent } from './component/administrador/menu-do-admin/menu-do-admin.component';
import { MontarCartasComponent } from './component/montar-cartas/montar-cartas.component';
import { CriarMesaComponent } from './component/mesa/criar-mesa/criar-mesa.component';
import { MesaCriadaComponent } from './component/mesa/mesa-criada/mesa-criada.component';
import { MesaJogoComponent } from './component/mesa/mesa-jogo/mesa-jogo.component';
import { MaoJogadorComponent } from './component/mesa/mao-jogador/mao-jogador.component';
import { IniciaPartidaComponent } from './component/mesa/inicia-partida/inicia-partida.component';
import { TelaErroComponent } from './component/erro/tela-erro/tela-erro.component';
import { TelaHistoriaComponent } from './component/tela-historia/tela-historia.component';
import { TelaDownloadComponent } from './component/tela-download/tela-download.component';
import { TelaErroJogoInciadoComponent } from './component/erro/tela-erro-jogo-inciado/tela-erro-jogo-inciado.component';
import { TelaErroSalaCheiaComponent } from './component/erro/tela-erro-sala-cheia/tela-erro-sala-cheia.component';
import { TelaErroJogoFinalizadoComponent } from './component/erro/tela-erro-jogo-finalizado/tela-erro-jogo-finalizado.component';
import { TelaErroSalaInexistenteComponent } from './component/erro/tela-erro-sala-inexistente/tela-erro-sala-inexistente.component';
import { RankingComponent } from './component/ranking/ranking.component';

const routes: Routes = [
  {
    path: 'primeiroacesso',
    component: PrimeiroAcessoComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: TelaSenhaComponent,
  },
  {
    path: 'menu',
    component: MenuDoAdminComponent,
  },
  {
    path: 'cartas',
    component: MontarCartasComponent,
  },
  {
    path: 'entrarmesa/:hash',
    component: EntrarMesaComponent,
  },

  {
    path:'entrarmesa',
    component: TelaErroComponent,
  },

  {
    path: 'mesa',
    component: CriarMesaComponent,
  },
  {
    path:'mesa-criada/:hash',
    component: MesaCriadaComponent,
  },
  {
    path:'jogo/:hash',
    component: MesaJogoComponent,
  },
  {
    path:'mao/:hash',
    component: MaoJogadorComponent
  },
  {
    path: 'areacompra',
    component: AreaDeCompraComponent,
  },  {
    path: 'iniciaPartida',
    component: IniciaPartidaComponent,
  },
  {
    path: 'historia',
    component: TelaHistoriaComponent,
  },
  {
    path: 'regras',
    component: RegrasComponent,
  },
  {
    path: 'download',
    component: TelaDownloadComponent,
  },
  {
    path:'jogoiniciado',
    component: TelaErroJogoInciadoComponent,
  },
  {
    path:'salacheia',
    component: TelaErroSalaCheiaComponent,
  },
  {
    path:'jogofinalizado',
    component: TelaErroJogoFinalizadoComponent,
  },
  {
    path:'salaInexistente',
    component: TelaErroSalaInexistenteComponent,
  },
  {
    path:'**',
    component: TelaErroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
