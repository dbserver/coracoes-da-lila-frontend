/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelaSenhaComponent } from './tela-senha.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TelaSenhaComponent', () => {
  let component: TelaSenhaComponent;
  let fixture: ComponentFixture<TelaSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaSenhaComponent ],
      imports:[HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
