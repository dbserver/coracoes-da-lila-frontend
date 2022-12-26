import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaErroJogoInciadoComponent } from './tela-erro-jogo-inciado.component';

describe('TelaErroJogoInciadoComponent', () => {
  let component: TelaErroJogoInciadoComponent;
  let fixture: ComponentFixture<TelaErroJogoInciadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaErroJogoInciadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaErroJogoInciadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
