import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from '../home-page/home-page.component';

import { LicenciamentoComponent } from './licenciamento.component';

fdescribe('LicenciamentoComponent', () => {
  let component: LicenciamentoComponent;
  let fixture: ComponentFixture<LicenciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve redirecionar para o site do CreativeCommons', () => {
    const ccLink =  fixture.nativeElement.querySelector('.cc_link');

    expect(ccLink.href).toEqual('http://creativecommons.org/licenses/by-nc-sa/4.0/');
  });

  it('deve redirecionar para o site do BDDWarriors', () => {
    const bddLink =  fixture.nativeElement.querySelector('#bdd_link');

    expect(bddLink.href).toEqual('https://bddwarriors.wordpress.com/');
  });
});
