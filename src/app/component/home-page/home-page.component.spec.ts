import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LicenciamentoComponent } from '../licenciamento/licenciamento.component';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Verifica se o texto "PCDs" está na pagina home', () => {
    let primeiroParagrafo = fixture.nativeElement.querySelector('#paragrafo1');

    expect(primeiroParagrafo.innerHTML).toContain('PCDs');
  });


  it('Verifica se o botão existe e tem o conteudo "Criar Partida"', () => {
    let botaoCriarPartida = fixture.nativeElement.querySelector('#buttonMesa');

    expect(botaoCriarPartida.innerHTML).toContain('Criar Partida');
  });

  it('deve redirecionar para a página de regras', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();
    component.irParaRegras();
    expect(router.navigate).toHaveBeenCalledWith(['/regras']);
  }));

  it('deve renderizar o componente licenciamento', () => {
    const licenciamentoCom = TestBed.createComponent(LicenciamentoComponent);
    const licenciamentoComInstance = licenciamentoCom.nativeElement;

    expect(licenciamentoComInstance.innerHTML).toContain('Creative Commons');
  });

  it('deve mostrar <button> escrito "Regras do Jogo"', () => {
    const regrasDoJogo: HTMLElement = fixture.nativeElement;
    const button = regrasDoJogo.querySelector('.botaoRegras')!;
    expect(button.textContent?.trim()).toEqual('Regras do Jogo');
  })

  it('deve conter o botão com o conteúdo "Download para Impressão" dentro da página home', () => {
    let botaoHistoriaDoJogo = fixture.nativeElement.querySelector('#botaoDownload');

    expect(botaoHistoriaDoJogo.innerHTML.trim()).toEqual('Download para impressão');
  })

  it('deve conter o botão com o conteúdo "História do jogo" dentro da página home', () => {
    let botaoHistoriaDoJogo = fixture.nativeElement.querySelector('#botaoHistoria');

    expect(botaoHistoriaDoJogo.innerHTML.trim()).toEqual('História do jogo');
  })

  it('deve testar se url do link é do site do patrocinador', () =>{
    const tagLink = fixture.debugElement.nativeElement.querySelector('#link-patrocinador');
    expect(tagLink.href).toEqual('https://db.tec.br/');
  });

});
