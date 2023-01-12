import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalZoomComponent } from '../mesa/modal-zoom/modal-zoom.component';

import { MontarCartasComponent } from './montar-cartas.component';

describe('MontarCartasComponent', () => {
  let component: MontarCartasComponent;
  let fixture: ComponentFixture<MontarCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontarCartasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, MatIconModule],
      providers: [ModalZoomComponent,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontarCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
