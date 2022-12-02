import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EntrarMesaComponent } from './entrar-mesa.component';

describe('EntrarMesaComponent', () => {
  let component: EntrarMesaComponent;
  let fixture: ComponentFixture<EntrarMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarMesaComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
