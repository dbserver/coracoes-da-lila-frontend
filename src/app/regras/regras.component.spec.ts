import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AcessibilidadeComponent } from '../acessibilidade/acessibilidade.component';

import { RegrasComponent } from './regras.component';

fdescribe('RegrasComponent', () => {
  let component: RegrasComponent;
  let fixture: ComponentFixture<RegrasComponent>;
  let acessibilidade: AcessibilidadeComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegrasComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve redirecionar para a home', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();
    component.irParaHome();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  }));
})
