import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalCartasObjetivoComponent } from '../modal-cartas-objetivo/modal-cartas-objetivo.component';
import { ModalZoomComponent } from '../modal-zoom/modal-zoom.component';

import { AreaDeCompraComponent } from './area-de-compra.component';

fdescribe('AreaDeCompraComponent', () => {
  let component: AreaDeCompraComponent;
  let fixture: ComponentFixture<AreaDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaDeCompraComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule],
      providers: [ModalCartasObjetivoComponent, ModalZoomComponent,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        // MatDialog, {
        //   provide: ActivatedRoute, useValue: {
        //     snapshot: {
        //       data: {
        //         carta: 
        //       }
        //     }
        //   }
        // }
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

    component.escolherEntreDuasCartasObjetivo();

    const modal = modalCartasObjetivo.nativeElement.querySelector('#modal');
    expect(modal.style.display).toEqual('flex');
  })

  it('deve testar se o modal fica com display none sem a chamada da função', () => {
    let modalCartasObjetivo = TestBed.createComponent(ModalCartasObjetivoComponent);

    const modal = modalCartasObjetivo.nativeElement.querySelector('#modal');
    expect(modal.style.display).toEqual('');
  })

  it('deve abrir o mat-dialog com click no botão de lupa', () => {
    const modalZoom = TestBed.createComponent(ModalZoomComponent);
    let evento = spyOn(component, 'abrirZoom').and.stub();
    const botao: HTMLElement = fixture.debugElement.nativeElement.querySelector('.zoom');
    fixture.detectChanges();
    botao.click();
    
    expect(evento).toHaveBeenCalled();
  })
});
