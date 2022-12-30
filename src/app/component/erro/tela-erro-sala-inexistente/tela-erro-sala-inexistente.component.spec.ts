import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TelaErroSalaInexistenteComponent } from './tela-erro-sala-inexistente.component';

describe('TelaErroSalaInexistenteComponent', () => {
  let component: TelaErroSalaInexistenteComponent;
  let fixture: ComponentFixture<TelaErroSalaInexistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaErroSalaInexistenteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaErroSalaInexistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
