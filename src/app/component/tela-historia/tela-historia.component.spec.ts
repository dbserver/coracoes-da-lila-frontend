import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHistoriaComponent } from './tela-historia.component';

describe('TelaHistoriaComponent', () => {
  let component: TelaHistoriaComponent;
  let fixture: ComponentFixture<TelaHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaHistoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Validar apresentação do conteúdo da página História do Jogo', () => {
    it('deve conter o ícone de contraste de tela', () => {
      let conteudoHistoriaDoJogo = fixture.nativeElement;
      console.log(conteudoHistoriaDoJogo);
    })
  })
});
