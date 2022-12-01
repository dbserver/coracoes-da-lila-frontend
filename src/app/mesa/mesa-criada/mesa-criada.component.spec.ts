import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaCriadaComponent } from './mesa-criada.component';

describe('MesaCriadaComponent', () => {
  let component: MesaCriadaComponent;
  let fixture: ComponentFixture<MesaCriadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesaCriadaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaCriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve alterar a variável "carregando" para true ao clicar', async () => {
    fixture.detectChanges();
    const carregando = component.carregando;
    const botao = fixture.nativeElement.querySelector('.btn');
    expect(carregando.valueOf).toBeFalsy();
    spyOn(component, 'roteamento');
    botao.click();
    fixture.whenStable().then(() => {
      expect(component.carregando).toBeTruthy();
    });
  })
});
