import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaRapidoComponent } from './guia-rapido.component';

describe('GuiaRapidoComponent', () => {
  let component: GuiaRapidoComponent;
  let fixture: ComponentFixture<GuiaRapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaRapidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
