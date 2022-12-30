import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { MaoJogadorComponent } from './mao-jogador.component';

describe('MaoJogadorComponent', () => {
  let component: MaoJogadorComponent;
  let fixture: ComponentFixture<MaoJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaoJogadorComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: MatDialog, useValue: {}
        }],
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
