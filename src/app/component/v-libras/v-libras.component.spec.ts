import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { VLibrasComponent } from './v-libras.component';

describe('VLibrasComponent', () => {
  let component: VLibrasComponent;
  let fixture: ComponentFixture<VLibrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VLibrasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VLibrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente é criado', () => {
    expect(component).toBeTruthy();
  });

  it('No componente vLibras quando o metodo ".adicionarClasse" é chamado e o href tem "/jogo/" então o componente deve ter a classe "invisivel"', () => {
    component.href = "/jogo/testecomponent";

    component.adicionarClasse();
    fixture.detectChanges();

    const classe = fixture.debugElement.children[0].classes.hasOwnProperty('invisivel');

    expect(classe).toBeTruthy();
  });

  it('No componente vLibras quando o metodo ".adicionarClasse" é chamado e o href tem não "/jogo/" então o componente não deve ter a classe "invisivel"', () => {
    component.href = "/mesa-jogo/testecomponent";

    component.adicionarClasse();
    fixture.detectChanges();

    const classe = fixture.debugElement.children[0].classes.hasOwnProperty('invisivel');

    expect(classe).toBeFalsy();
  });
});
