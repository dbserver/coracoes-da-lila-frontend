import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeCompraComponent } from './area-de-compra.component';

describe('AreaDeCompraComponent', () => {
  let component: AreaDeCompraComponent;
  let fixture: ComponentFixture<AreaDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDeCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
