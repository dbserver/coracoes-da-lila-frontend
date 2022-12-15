import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacaoCartaComponent } from './animacao-carta.component';

describe('AnimacaoCartaComponent', () => {
  let component: AnimacaoCartaComponent;
  let fixture: ComponentFixture<AnimacaoCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacaoCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimacaoCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
