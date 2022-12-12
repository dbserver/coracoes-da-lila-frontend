import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCartasObjetivoComponent } from './modal-cartas-objetivo.component';

describe('ModalCartasObjetivoComponent', () => {
  let component: ModalCartasObjetivoComponent;
  let fixture: ComponentFixture<ModalCartasObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCartasObjetivoComponent ],
      providers: [ModalCartasObjetivoComponent, HttpClient, HttpHandler]
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
