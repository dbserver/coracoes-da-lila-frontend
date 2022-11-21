import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcessibilidadeComponent } from 'src/app/acessibilidade/acessibilidade.component';
import { AppComponent } from 'src/app/app.component';

import { TelaHistoriaComponent } from './tela-historia.component';

fdescribe('TelaHistoriaComponent', () => {
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
      let appComponent = TestBed.createComponent(AcessibilidadeComponent);
      let primeiroParagrafo = fixture.nativeElement.querySelector('#switch');
      let conteudoHistoriaDoJogo = fixture.nativeElement;
  
      console.log(primeiroParagrafo);
    })
  })
});
