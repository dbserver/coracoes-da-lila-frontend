import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { PainelVoltarComponent } from './painel-voltar.component';

fdescribe('PainelVoltarComponent', () => {
  let component: PainelVoltarComponent;
  let fixture: ComponentFixture<PainelVoltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelVoltarComponent ],
      imports: [HttpClientTestingModule]
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
    expect(fixture.nativeElement.innerHTML).toContain('Voltar');
  });

  it('deve mostrar imagem do logo', () => {
    const imagem = fixture.nativeElement.querySelector('img');
    expect(imagem['src']).toContain('LogoLilaCor.png');
  });

  it('deve redirecionar para a home ao clicar', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();
    component.irParaHome();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  }));
});
