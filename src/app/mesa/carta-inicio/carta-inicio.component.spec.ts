import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaInicioComponent } from './carta-inicio.component';

describe('CartaInicioComponent', () => {
  let component: CartaInicioComponent;
  let fixture: ComponentFixture<CartaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
