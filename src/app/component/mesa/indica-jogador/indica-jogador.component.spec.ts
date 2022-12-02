import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicaJogadorComponent } from './indica-jogador.component';

describe('IndicaJogadorComponent', () => {
  let component: IndicaJogadorComponent;
  let fixture: ComponentFixture<IndicaJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicaJogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicaJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
