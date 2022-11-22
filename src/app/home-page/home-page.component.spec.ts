import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenciamentoComponent } from '../licenciamento/licenciamento.component';

import { HomePageComponent } from './home-page.component';

fdescribe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar o componente licenciamento', () => {
    const licenciamentoCom = TestBed.createComponent(LicenciamentoComponent);
    const licenciamentoComInstance = licenciamentoCom.nativeElement;

    expect(licenciamentoComInstance.innerHTML).toContain('Creative Commons'); 
  });
});
