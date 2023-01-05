import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RegrasJogoComponent } from './regras-jogo.component';

describe('RegrasJogoComponent', () => {
  let component: RegrasJogoComponent;
  let fixture: ComponentFixture<RegrasJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegrasJogoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrasJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
