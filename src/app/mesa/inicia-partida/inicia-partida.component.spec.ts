import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaPartidaComponent } from './inicia-partida.component';

describe('IniciaPartidaComponent', () => {
  let component: IniciaPartidaComponent;
  let fixture: ComponentFixture<IniciaPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciaPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciaPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
