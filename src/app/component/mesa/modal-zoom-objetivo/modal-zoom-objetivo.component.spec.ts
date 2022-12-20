import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalZoomObjetivoComponent } from './modal-zoom-objetivo.component';

describe('ModalZoomObjetivoComponent', () => {
  let component: ModalZoomObjetivoComponent;
  let fixture: ComponentFixture<ModalZoomObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalZoomObjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalZoomObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
