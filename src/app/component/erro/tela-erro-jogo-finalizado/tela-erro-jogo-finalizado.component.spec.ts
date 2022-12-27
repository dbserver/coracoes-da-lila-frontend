import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaErroJogoFinalizadoComponent } from './tela-erro-jogo-finalizado.component';

describe('TelaErroJogoFinalizadoComponent', () => {
  let component: TelaErroJogoFinalizadoComponent;
  let fixture: ComponentFixture<TelaErroJogoFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaErroJogoFinalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaErroJogoFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
