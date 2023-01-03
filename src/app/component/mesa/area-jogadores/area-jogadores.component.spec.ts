import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AreaJogadoresComponent } from './area-jogadores.component';
import { MatDialog } from '@angular/material/dialog';

describe('AreaJogadoresComponent', () => {
  let component: AreaJogadoresComponent;
  let fixture: ComponentFixture<AreaJogadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaJogadoresComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [{ provide: MatDialog, useValue: {}
      }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
