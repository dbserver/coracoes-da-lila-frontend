import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { PainelVoltarComponent } from './painel-voltar.component';

describe('PainelVoltarComponent', () => {
  let component: PainelVoltarComponent;
  let fixture: ComponentFixture<PainelVoltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelVoltarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve redirecionar para a home ao clicar', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();
    component.irParaHome();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  }));
});
