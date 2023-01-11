import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { SelecionaCategoriaComponent } from './seleciona-categoria.component';

describe('SelecionaCategoriaComponent', () => {
  let component: SelecionaCategoriaComponent;
  let fixture: ComponentFixture<SelecionaCategoriaComponent>;
  const hash = 'hash';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionaCategoriaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [HttpClient, HttpHandler, 
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ 'hash': hash }) } } }]
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
