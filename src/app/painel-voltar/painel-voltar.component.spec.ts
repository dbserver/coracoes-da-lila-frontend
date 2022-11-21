import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
