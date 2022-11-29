import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitaDadoComponent } from './habilita-dado.component';

describe('HabilitaDadoComponent', () => {
  let component: HabilitaDadoComponent;
  let fixture: ComponentFixture<HabilitaDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitaDadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitaDadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
