import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


import { EntrarMesaComponent } from './entrar-mesa.component';

describe('EntrarMesaComponent', () => {
  let component: EntrarMesaComponent;
  let fixture: ComponentFixture<EntrarMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarMesaComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve verificar se status de sala cheia está sendo chamado da api para o metodo', () => {
    spyOn(component, 'verificarSeSalaCheia')
    
    expect(component.verificarSeSalaCheia('this.sala.status'))
    .withContext("NOVO && AGUARDANDO")
    expect(component.verificarSeSalaCheia).toHaveBeenCalled()
   });

   it('deve verificar se status de jogo iniciado está sendo chamado da api para o metodo', () => {
    spyOn(component, 'verificarSeJogoIniciado')
   
    expect(component.verificarSeJogoIniciado('this.sala.status'))
    .withContext("JOGANDO && ULTIMA_RODADA")
   
    expect(component.verificarSeJogoIniciado).toHaveBeenCalled()
   });

   it('deve verificar se status de jogo finalizado está sendo chamado da api para o metodo', () => {
    spyOn(component, 'verificarSeJogoFinalizado')
   
    expect(component.verificarSeJogoFinalizado('this.sala.status'))
    .withContext("FINALIZADO")
   
    expect(component.verificarSeJogoFinalizado).toHaveBeenCalled()
   });

  
});


