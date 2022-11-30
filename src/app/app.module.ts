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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrimeiroAcessoComponent } from './administrador/primeiro-acesso/primeiro-acesso.component';
import { AcessibilidadeComponent } from './component/acessibilidade/acessibilidade.component';
import { TelaSenhaComponent } from './administrador/tela-senha/tela-senha.component';
import { MenuDoAdminComponent } from './administrador/menu-do-admin/menu-do-admin.component';
import { MontarCartasComponent } from './montar-cartas/montar-cartas.component';
import { EntrarMesaComponent } from './entrar-mesa/entrar-mesa.component';
import { MaoJogadorComponent } from './mesa/mao-jogador/mao-jogador.component';
import { CriarMesaComponent } from './mesa/criar-mesa/criar-mesa.component';
import { MesaCriadaComponent } from './mesa/mesa-criada/mesa-criada.component';
import { AreaDeCompraComponent } from './mesa/area-de-compra/area-de-compra.component';
import { HabilitaDadoComponent } from './mesa/habilita-dado/habilita-dado.component';
import { GuiaRapidoComponent } from './mesa/guia-rapido/guia-rapido.component';
import { RegrasJogoComponent } from './mesa/regras-jogo/regras-jogo.component';
import { IniciaPartidaComponent } from './mesa/inicia-partida/inicia-partida.component';
import { MesaJogoComponent } from './mesa/mesa-jogo/mesa-jogo.component';
import { AreaJogadoresComponent } from './mesa/area-jogadores/area-jogadores.component';
import { MesaJogoService } from './service/mesa-jogo.service';
import { RankingComponent } from './component/ranking/ranking.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {
  InjectableRxStompConfig,
  RxStompService,
  rxStompServiceFactory,
} from '@stomp/ng2-stompjs';

import { myRxStompConfig } from './rx-stomp.config';
import { TelaErroComponent } from './tela-erro/tela-erro.component';
import { IndicaJogadorComponent } from './mesa/indica-jogador/indica-jogador.component';
import { LicenciamentoComponent } from './licenciamento/licenciamento.component';
import { TelaHistoriaComponent } from './component/tela-historia/tela-historia.component';
import { RegrasComponent } from './regras/regras.component';
import { CartaInicioComponent } from './mesa/carta-inicio/carta-inicio.component';
import { PainelVoltarComponent } from './component/painel-voltar/painel-voltar.component';
import { TelaDownloadComponent } from './component/tela-download/tela-download.component';





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
    TelaDownloadComponent

  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ClipboardModule,
    MatCardModule,
    MatProgressSpinnerModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
