import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TelaErroSalaCheiaComponent } from './tela-erro-sala-cheia.component';

describe('TelaErroSalaCheiaComponent', () => {
  let component: TelaErroSalaCheiaComponent;
  let fixture: ComponentFixture<TelaErroSalaCheiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaErroSalaCheiaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaErroSalaCheiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
