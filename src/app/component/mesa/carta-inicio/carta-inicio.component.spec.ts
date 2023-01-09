import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CartaInicioComponent } from './carta-inicio.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { findEl } from 'src/app/utils/testUtils';

describe('CartaInicioComponent', () => {
  let component: CartaInicioComponent;
  let fixture: ComponentFixture<CartaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaInicioComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir o mat-dialog com click no botão de lupa', async () => {
    spyOn(component, 'abrirZoom').and.stub();
    const botao: HTMLElement = fixture.debugElement.nativeElement.querySelector('.zoom');

    fixture.detectChanges();
    botao.click();
    
    fixture.whenRenderingDone().then(() => {
      expect(component.abrirZoom).toHaveBeenCalled();
    })
  });
});
