import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaErroComponent } from './tela-erro.component';

describe('TelaErroComponent', () => {
  let component: TelaErroComponent;
  let fixture: ComponentFixture<TelaErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
