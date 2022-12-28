import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AcessibilidadeComponent } from '../acessibilidade/acessibilidade.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';



import { RegrasComponent } from './regras.component';

describe('RegrasComponent', () => {
  let component: RegrasComponent;
  let fixture: ComponentFixture<RegrasComponent>;
  let acessibilidade: AcessibilidadeComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegrasComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve redirecionar para a home', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();
    component.irParaHome();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  }));

  it('deve mostrar imagem do layout da área de compras', () => {
    const imagem = fixture.nativeElement.querySelector('.layout-mesa');
    expect(imagem['src']).toContain('layout-mesa.png');
  });

  it('deve mostrar imagem dos dados', () => {
    const imagem = fixture.nativeElement.querySelector('.dado');
    expect(imagem['src']).toContain('dados-bonus.png');
  });

  it('deve mostrar imagem do coração pequeno', () => {
    const imagem = fixture.nativeElement.querySelector('.coracao-pequeno');
    expect(imagem['src']).toContain('icone-coracao.svg');
  });

  it('deve mostrar imagem do presente', () => {
    const imagem = fixture.nativeElement.querySelector('.presente');
    expect(imagem['src']).toContain('presente-info.png');
  });

  it('deve mostrar imagem do coração grande', () => {
    const imagem = fixture.nativeElement.querySelector('.coracao-grande');
    expect(imagem['src']).toContain('icone-coracao.svg');
  });

  it('deve mostrar imagem do presente', () => {
    const imagem = fixture.nativeElement.querySelector('.presente-acao');
    expect(imagem['src']).toContain('presente-acao.png');
  });

  it('deve mostrar título corações da lila', () => {
    const titulo: HTMLElement = fixture.nativeElement;
    const coracoesDaLila = titulo.querySelector('.titulo')!;
    expect(coracoesDaLila.textContent).toEqual('Corações da LILA');
  });

  it('deve mostrar subtítulo do setup', () => {
    const subtitulo1: HTMLElement = fixture.nativeElement;
    const setup = subtitulo1.querySelector('.subtitulo1')!;
    expect(setup.textContent).toEqual('SETUP para 2 a 6 jogadores:');
  });

  it('deve mostrar subtítulo da escolha de ação', () => {
    const subtitulo2: HTMLElement = fixture.nativeElement;
    const acao = subtitulo2.querySelector('.subtitulo2')!;
    expect(acao.textContent?.trim()).toEqual('Na sua vez o jogador pode escolher UMA AÇÃO abaixo:');
  });

  it('deve mostrar subtítulo Bônus', () => {
    const subtitulo3: HTMLElement = fixture.nativeElement;
    const bonus = subtitulo3.querySelector('.subtitulo3')!;
    expect(bonus.textContent?.trim()).toEqual('Bônus:');
  });

})
