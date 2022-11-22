import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessibilidadeComponent } from './acessibilidade.component';

describe('AcessibilidadeComponent', () => {
  let component: AcessibilidadeComponent;
  let fixture: ComponentFixture<AcessibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessibilidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve conter o ícone de contraste de tela', () => {
    let acessibilidadeComponent = TestBed.createComponent(AcessibilidadeComponent);
    let contraste = acessibilidadeComponent.nativeElement.querySelector('#contraste');
   
    expect(contraste.innerHTML).toContain('Contraste');
  })

  it('deve conter o ícone de tamanho da fonte', () => {
    let acessibilidadeComponent = TestBed.createComponent(AcessibilidadeComponent);
    let fonte = acessibilidadeComponent.nativeElement.querySelector('#icone-fonte');
   
    expect(fonte.innerHTML).toContain('A +');
  })
  
});
