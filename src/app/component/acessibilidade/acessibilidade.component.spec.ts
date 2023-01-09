import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  //testa se o botão de ajustar a fonte parou de ser exibido
  it('Mudar a boolean esconderFonte para true', () => {
    //component.esconderFonte = true
    component.esconderBotaoAjusteFonte()
    expect(component.esconderFonte).toEqual(true)
  });


  it('Mudar fonte para tamanho normal', () => {
    
    document.querySelector('html')!.classList.add('fonteMaior')
    //component.esconderFonte = true
    component.fonteTamanhoNormal()
    expect(document.querySelector('html')!.classList.contains('fonteMaior')).toEqual(false)
  });

  it('Mudar tamanho fonte', () => {
    expect(component.toggleClass).toBeDefined()
  });
});
