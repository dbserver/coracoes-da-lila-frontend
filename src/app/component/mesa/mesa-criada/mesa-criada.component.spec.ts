import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MesaCriadaComponent } from './mesa-criada.component';
import { RxStompService } from '@stomp/ng2-stompjs';

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
      providers: [RxStompService]
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

  it('deve verificar se o botão iniciar partida contém a mensagem "Entrar na Mesa"', () => {
    const botaoEntrarMesa = obterValorPorId('#entrar');
    expect(component.carregando).toBeFalse();
    expect(botaoEntrarMesa.trim()).toContain('Entrar na Mesa')
  });

  it('deve testar se o método roteamento() é chamado"', () => {
    const roteamento = spyOn(component, 'roteamento');
    const botao = fixture.nativeElement.querySelector('.btn');
    botao.click();
    expect(roteamento).toHaveBeenCalled();
  });  
  
})
