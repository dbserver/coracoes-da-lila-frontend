import { AppComponent } from './../../app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcessibilidadeComponent } from './../../acessibilidade/acessibilidade.component';

import { TelaHistoriaComponent } from './tela-historia.component';

describe('TelaHistoriaComponent', () => {
  let component: TelaHistoriaComponent;
  let fixture: ComponentFixture<TelaHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaHistoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
