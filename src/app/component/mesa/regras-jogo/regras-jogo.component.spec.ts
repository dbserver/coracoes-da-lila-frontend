import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrasJogoComponent } from './regras-jogo.component';

describe('RegrasJogoComponent', () => {
  let component: RegrasJogoComponent;
  let fixture: ComponentFixture<RegrasJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegrasJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrasJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
