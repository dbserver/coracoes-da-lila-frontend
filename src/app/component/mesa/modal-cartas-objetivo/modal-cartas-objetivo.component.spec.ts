import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCartasObjetivoComponent } from './modal-cartas-objetivo.component';

describe('ModalCartasObjetivoComponent', () => {
  let component: ModalCartasObjetivoComponent;
  let fixture: ComponentFixture<ModalCartasObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCartasObjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCartasObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
