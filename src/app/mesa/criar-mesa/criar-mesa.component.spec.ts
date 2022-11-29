import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMesaComponent } from './criar-mesa.component';

fdescribe('CriarMesaComponent', () => {
  let component: CriarMesaComponent;
  let fixture: ComponentFixture<CriarMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarMesaComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
