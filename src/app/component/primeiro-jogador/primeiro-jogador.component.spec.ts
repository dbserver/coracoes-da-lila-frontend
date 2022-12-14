import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroJogadorComponent } from './primeiro-jogador.component';

describe('PrimeiroJogadorComponent', () => {
  let component: PrimeiroJogadorComponent;
  let fixture: ComponentFixture<PrimeiroJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroJogadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
