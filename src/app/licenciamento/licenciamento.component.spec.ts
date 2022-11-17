import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciamentoComponent } from './licenciamento.component';

describe('LicenciamentoComponent', () => {
  let component: LicenciamentoComponent;
  let fixture: ComponentFixture<LicenciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
