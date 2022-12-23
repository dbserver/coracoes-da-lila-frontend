import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalZoomComponent } from './modal-zoom.component';

describe('ModalZoomComponent', () => {
  let component: ModalZoomComponent;
  let fixture: ComponentFixture<ModalZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalZoomComponent],
      imports: [MatDialogModule, HttpClientTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModalZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve fechar o mat-dialog quando clicar no botão de fechar', () => {
    spyOn(component, 'fecharZoom').and.stub();
    const botao: HTMLElement = fixture.nativeElement.querySelector('#fechar');
    fixture.detectChanges();
    botao.click();
    expect(component.fecharZoom).toHaveBeenCalled();
  })
});
