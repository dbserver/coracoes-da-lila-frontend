import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaoJogadorComponent } from './mao-jogador.component';

describe('MaoJogadorComponent', () => {
  let component: MaoJogadorComponent;
  let fixture: ComponentFixture<MaoJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaoJogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaoJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
