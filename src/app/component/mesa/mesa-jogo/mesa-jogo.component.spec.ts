import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaJogoComponent } from './mesa-jogo.component';

describe('MesaJogoComponent', () => {
  let component: MesaJogoComponent;
  let fixture: ComponentFixture<MesaJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
