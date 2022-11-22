import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { By } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

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

  it('deve testar se url do link é do site do patrocinador', () =>{
    const tagLink = fixture.debugElement.nativeElement.querySelector('#link-patrocinador');
    expect(tagLink.href).toEqual('https://db.tec.br/');
  });
});
