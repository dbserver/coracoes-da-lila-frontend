import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TelaErroJogoInciadoComponent } from './tela-erro-jogo-inciado.component';

describe('TelaErroJogoInciadoComponent', () => {
  let component: TelaErroJogoInciadoComponent;
  let fixture: ComponentFixture<TelaErroJogoInciadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaErroJogoInciadoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
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
