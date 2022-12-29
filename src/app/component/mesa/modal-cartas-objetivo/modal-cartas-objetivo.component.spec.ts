import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalCartasObjetivoComponent } from './modal-cartas-objetivo.component';
import { MatDialog } from '@angular/material/dialog';

describe('ModalCartasObjetivoComponent', () => {
  let component: ModalCartasObjetivoComponent;
  let fixture: ComponentFixture<ModalCartasObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCartasObjetivoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [ModalCartasObjetivoComponent, HttpClient, HttpHandler, {provide: MatDialog, useValue: {}}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCartasObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve adicionar display vazio na pop-up de cartas objetivo, fazendo ela sumir', () => {
    const modal = fixture.nativeElement.querySelector('#modal');

    expect(modal.style.display).toEqual('')
  })
});
