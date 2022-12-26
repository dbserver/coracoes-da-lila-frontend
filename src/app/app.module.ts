import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PrimeiroAcessoComponent } from './component/administrador/primeiro-acesso/primeiro-acesso.component';
import { AcessibilidadeComponent } from './component/acessibilidade/acessibilidade.component';
import { TelaSenhaComponent } from './component/administrador/tela-senha/tela-senha.component';
import { MenuDoAdminComponent } from './component/administrador/menu-do-admin/menu-do-admin.component';
import { MontarCartasComponent } from './component/montar-cartas/montar-cartas.component';
import { EntrarMesaComponent } from './component/entrar-mesa/entrar-mesa.component';
import { MaoJogadorComponent } from './component/mesa/mao-jogador/mao-jogador.component';
import { CriarMesaComponent } from './component/mesa/criar-mesa/criar-mesa.component';
import { MesaCriadaComponent } from './component/mesa/mesa-criada/mesa-criada.component';
import { AreaDeCompraComponent } from './component/mesa/area-de-compra/area-de-compra.component';
import { HabilitaDadoComponent } from './component/mesa/habilita-dado/habilita-dado.component';
import { GuiaRapidoComponent } from './component/mesa/guia-rapido/guia-rapido.component';
import { RegrasJogoComponent } from './component/mesa/regras-jogo/regras-jogo.component';
import { IniciaPartidaComponent } from './component/mesa/inicia-partida/inicia-partida.component';
import { MesaJogoComponent } from './component/mesa/mesa-jogo/mesa-jogo.component';
import { AreaJogadoresComponent } from './component/mesa/area-jogadores/area-jogadores.component';
import { MesaJogoService } from './service/mesa-jogo-service/mesa-jogo.service';
import { RankingComponent } from './component/ranking/ranking.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {
  InjectableRxStompConfig,
  RxStompService,
  rxStompServiceFactory,
} from '@stomp/ng2-stompjs';

import { myRxStompConfig } from './rx-stomp.config';
import { TelaErroComponent } from './component/tela-erro/tela-erro.component';
import { IndicaJogadorComponent } from './component/mesa/indica-jogador/indica-jogador.component';
import { LicenciamentoComponent } from './component/licenciamento/licenciamento.component';
import { TelaHistoriaComponent } from './component/tela-historia/tela-historia.component';
import { RegrasComponent } from './component/regras/regras.component';
import { CartaInicioComponent } from './component/mesa/carta-inicio/carta-inicio.component';
import { PainelVoltarComponent } from './component/painel-voltar/painel-voltar.component';
import { TelaDownloadComponent } from './component/tela-download/tela-download.component';
import { ModalCartasObjetivoComponent } from './component/mesa/modal-cartas-objetivo/modal-cartas-objetivo.component';
import { ModalZoomComponent } from './component/mesa/modal-zoom/modal-zoom.component';
import { ModalZoomObjetivoComponent } from './component/mesa/modal-zoom-objetivo/modal-zoom-objetivo.component';
import { PrimeiroJogadorComponent } from './component/primeiro-jogador/primeiro-jogador.component';
import { MatRadioModule } from '@angular/material/radio';
import { AnimacaoCartaComponent } from './component/mesa/animacao-carta/animacao-carta.component';
import { OpcoesJogadaComponent } from './component/mesa/opcoes-jogada/opcoes-jogada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PrimeiroAcessoComponent,
    AcessibilidadeComponent,
    TelaSenhaComponent,
    ModalComponent,
    MenuDoAdminComponent,
    MontarCartasComponent,
    EntrarMesaComponent,
    CriarMesaComponent,
    MesaCriadaComponent,
    MesaJogoComponent,
    AreaJogadoresComponent,
    MaoJogadorComponent,
    AreaDeCompraComponent,
    GuiaRapidoComponent,
    RegrasJogoComponent,
    IniciaPartidaComponent,
    HabilitaDadoComponent,
    TelaErroComponent,
    IndicaJogadorComponent,
    RankingComponent,
    RegrasComponent,
    CartaInicioComponent,
    LicenciamentoComponent,
    TelaHistoriaComponent,
    RegrasComponent,
    PainelVoltarComponent,
    TelaDownloadComponent,
    ModalCartasObjetivoComponent,
    ModalZoomComponent,
    ModalZoomObjetivoComponent,
    OpcoesJogadaComponent,
    PrimeiroJogadorComponent,
    AnimacaoCartaComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatRadioModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    ClipboardModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
    MesaJogoService,
    ModalCartasObjetivoComponent,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
