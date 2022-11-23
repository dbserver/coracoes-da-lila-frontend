import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVoltarComponent } from './painel-voltar.component';

describe('PainelVoltarComponent', () => {
  let component: PainelVoltarComponent;
  let fixture: ComponentFixture<PainelVoltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelVoltarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve mostrar <button> escrito "Voltar"', () => {
    const voltar: HTMLElement = fixture.nativeElement;
    const button = voltar.querySelector('.botaoVoltar')!;
    expect(button.textContent?.trim()).toEqual('Voltar');
  });

  it('deve mostrar imagem do logo', () => {
    const imagem = fixture.nativeElement.querySelector('img');
    expect(imagem['src']).toContain('LogoLilaCor.png');
  });

});
