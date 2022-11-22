import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

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
});