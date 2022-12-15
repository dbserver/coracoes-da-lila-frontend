import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaErroJogoEmAndamentoComponent } from './tela-erro-jogo-em-andamento.component';

describe('TelaErroJogoEmAndamentoComponent', () => {
  let component: TelaErroJogoEmAndamentoComponent;
  let fixture: ComponentFixture<TelaErroJogoEmAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaErroJogoEmAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaErroJogoEmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
