import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarMesaComponent } from './entrar-mesa.component';

describe('EntrarMesaComponent', () => {
  let component: EntrarMesaComponent;
  let fixture: ComponentFixture<EntrarMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
