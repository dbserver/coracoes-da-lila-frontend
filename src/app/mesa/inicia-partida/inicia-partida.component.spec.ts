import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IniciaPartidaComponent } from './inicia-partida.component';

fdescribe('IniciaPartidaComponent', () => {
  let component: IniciaPartidaComponent;
  let fixture: ComponentFixture<IniciaPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciaPartidaComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciaPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function obterValorPorId(nomeId: string): string {
    return fixture.debugElement.query(By.css(nomeId)).nativeElement.innerHTML;
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve verificar se o botão iniciar partida contém a mensagem "Iniciar Jogo"', () => {
    const botaoIniciarJogo = obterValorPorId('#iniciar');
    expect(component.desabilitaBtn).toBeFalse();
    expect(botaoIniciarJogo.trim()).toContain('Iniciar Jogo')
  })

  it('deve alterar a variável "desabilitaBtn" para true ao clicar', () => {
    const desabilitaBtn = component.desabilitaBtn;
    expect(component.desabilitaBtn).toBeFalsy();
    const botao = fixture.debugElement.query(By.css('.btn-aguarde')).nativeElement.innerHTML;
    botao.click();
    expect(desabilitaBtn.valueOf).toBeTruthy();
  })
});
