import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingComponent } from './ranking.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RankingComponent', () => {
  let component: RankingComponent;
  let fixture: ComponentFixture<RankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve apresentar o botão voltar para a página inicial', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Voltar para página inicial');
  });

  it('deve redirecionar para a pagina inicial ao clicar no botão voltar', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    const compiled = fixture.nativeElement;
    compiled.querySelector('button').click();
    expect(spy).toHaveBeenCalledWith(['']);
  });


});
