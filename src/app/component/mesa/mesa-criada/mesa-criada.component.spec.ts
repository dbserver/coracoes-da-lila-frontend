import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MesaCriadaComponent } from './mesa-criada.component';

describe('MesaCriadaComponent', () => {
  let component: MesaCriadaComponent;
  let fixture: ComponentFixture<MesaCriadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesaCriadaComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [

      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaCriadaComponent);
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
    expect(component.carregando).toBeFalse();
    expect(botaoIniciarJogo.trim()).toContain('Iniciar Jogo')
  })

/*   it('deve alterar a variável "carregando" para true ao clicar', () => {
    const carregando = component.carregando;
    expect(component.carregando).toBeFalsy();
    const botao = fixture.nativeElement.querySelector('.btn');
    botao.click();
    expect(carregando.valueOf).toBeTruthy();
  }); */
  
})
