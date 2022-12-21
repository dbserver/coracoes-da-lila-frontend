import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesJogadaComponent } from './opcoes-jogada.component';

describe('OpcoesJogadaComponent', () => {
  let component: OpcoesJogadaComponent;
  let fixture: ComponentFixture<OpcoesJogadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcoesJogadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcoesJogadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
