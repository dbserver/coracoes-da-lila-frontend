import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalZoomCartaInicialComponent } from './modal-zoom-carta-inicial.component';

describe('ModalZoomCartaInicialComponent', () => {
  let component: ModalZoomCartaInicialComponent;
  let fixture: ComponentFixture<ModalZoomCartaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalZoomCartaInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalZoomCartaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve fechar o "modal" quando clicar no botão de fechar', () => {
    spyOn(component, 'fecharZoom').and.stub();
    const botao: HTMLElement = fixture.nativeElement.querySelector('#fechar');
    
    fixture.detectChanges();
    botao.click();

    expect(component.fecharZoom).toHaveBeenCalled();
  })
});