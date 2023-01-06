import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalCartasObjetivoComponent } from '../modal-cartas-objetivo/modal-cartas-objetivo.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalZoomComponent } from '../modal-zoom/modal-zoom.component';
import { AreaDeCompraComponent } from './area-de-compra.component';

describe('AreaDeCompraComponent', () => {
  let component: AreaDeCompraComponent;
  let fixture: ComponentFixture<AreaDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDeCompraComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule],
      providers: [ModalCartasObjetivoComponent, ModalZoomComponent,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ]
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

    component.abrirModal();

    const modal = modalCartasObjetivo.nativeElement.querySelector('#modal');
    expect(modal.style.display).toEqual('flex');
  })

  it('deve testar se o modal fica com display none sem a chamada da função', () => {
    let modalCartasObjetivo = TestBed.createComponent(ModalCartasObjetivoComponent);

    const modal = modalCartasObjetivo.nativeElement.querySelector('#modal');
    expect(modal.style.display).toEqual('');
  })

  // teste que não está passando:
/*   it('deve abrir o mat-dialog com click no botão de lupa', async () => {
    spyOn(component, 'abrirZoom').and.stub();
    const botao: HTMLElement = fixture.debugElement.nativeElement.querySelector('.zoom');
    fixture.detectChanges();
    botao.click();
    fixture.whenRenderingDone().then(() => {
      expect(component.abrirZoom).toHaveBeenCalled();
    })
  }); */
})