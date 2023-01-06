import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { OpcoesJogadaComponent } from './opcoes-jogada.component';

describe('OpcoesJogadaComponent', () => {
  let component: OpcoesJogadaComponent;
  let fixture: ComponentFixture<OpcoesJogadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcoesJogadaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcoesJogadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
