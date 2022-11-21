import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomePageComponent } from './home-page.component';

fdescribe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve redirecionar para a página de regras', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();
    component.irParaRegras();
    expect(router.navigate).toHaveBeenCalledWith(['/regras']);
  }));

  it('deve mostrar <button> escrito "Regras do Jogo"', () => {
    const regrasDoJogo: HTMLElement = fixture.nativeElement;
    const button = regrasDoJogo.querySelector('.botaoRegras')!;
    expect(button.textContent?.trim()).toEqual('Regras do Jogo');
  })
});
