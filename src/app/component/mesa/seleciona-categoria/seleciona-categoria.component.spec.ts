import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaCategoriaComponent } from './seleciona-categoria.component';

describe('SelecionaCategoriaComponent', () => {
  let component: SelecionaCategoriaComponent;
  let fixture: ComponentFixture<SelecionaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionaCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
