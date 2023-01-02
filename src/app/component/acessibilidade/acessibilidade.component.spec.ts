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

  it('Mudar a boolean esconder para true', () => {
    localStorage.setItem('esconder', 'esconder')
    expect(component.esconderFonte).toEqual(true)
  });

  it('Mudar fonte para tamanho normal', () => {
    component.toggleClass('fonteMaior')
    component.esconderFonte = true
    expect(component.fonteTamanhoNormal()).toHaveBeenCalled
  });

  it('Mudar tamanho fonte', () => {
    expect(component.toggleClass).toBeDefined()
  });
});
