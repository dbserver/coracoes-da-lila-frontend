import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitaDadoComponent } from './habilita-dado.component';

describe('HabilitaDadoComponent', () => {
  let component: HabilitaDadoComponent;
  let fixture: ComponentFixture<HabilitaDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitaDadoComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitaDadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve alterar a variável "desabilitado" para true ao clicar', () => {
    const desabilitado = component.desabilitado;
    expect(component.desabilitado).toBeFalsy();
    const botao = fixture.nativeElement.querySelector('.btn');
    botao.click();
    expect(!desabilitado.valueOf).toBeTruthy();
  });
});
