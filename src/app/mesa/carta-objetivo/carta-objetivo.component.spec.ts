import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaObjetivoComponent } from './carta-objetivo.component';

describe('CartaObjetivoComponent', () => {
  let component: CartaObjetivoComponent;
  let fixture: ComponentFixture<CartaObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaObjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
