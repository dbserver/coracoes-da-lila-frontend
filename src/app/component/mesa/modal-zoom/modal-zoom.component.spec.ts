import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalZoomComponent } from './modal-zoom.component';

describe('ModalZoomComponent', () => {
  let component: ModalZoomComponent;
  let fixture: ComponentFixture<ModalZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalZoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
