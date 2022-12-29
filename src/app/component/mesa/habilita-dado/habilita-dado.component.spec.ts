import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HabilitaDadoComponent } from './habilita-dado.component';

describe('HabilitaDadoComponent', () => {
  let component: HabilitaDadoComponent;
  let fixture: ComponentFixture<HabilitaDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitaDadoComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
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

  it('deve testar se o método mudaDesabilitado() é chamado"', () => {
    component.desabilitado = false;
    let mudaDesabilitado = spyOn(component, 'mudaDesabilitado');
    let botao = fixture.nativeElement.querySelector('botao');
    botao.click();
    expect(mudaDesabilitado).toHaveBeenCalled();
  });


});
