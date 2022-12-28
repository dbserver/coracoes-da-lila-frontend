import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalCartasObjetivoComponent } from '../modal-cartas-objetivo/modal-cartas-objetivo.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AreaDeCompraComponent } from './area-de-compra.component';

describe('AreaDeCompraComponent', () => {
  let component: AreaDeCompraComponent;
  let fixture: ComponentFixture<AreaDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDeCompraComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ModalCartasObjetivoComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir o modal quando o método escolherEntreDuasCartasObjetivo for chamado', () => {
    const modalCartasObjetivo = TestBed.createComponent(ModalCartasObjetivoComponent);
    
    component.escolherEntreDuasCartasObjetivo();

    const modal = modalCartasObjetivo.nativeElement.querySelector('#modal');
    expect(modal.style.display).toEqual('flex');
  })

  it('deve testar se o modal fica com display none sem a chamada da função', () => {
    let modalCartasObjetivo = TestBed.createComponent(ModalCartasObjetivoComponent);

    const modal = modalCartasObjetivo.nativeElement.querySelector('#modal');
    expect(modal.style.display).toEqual('');
  })


});
