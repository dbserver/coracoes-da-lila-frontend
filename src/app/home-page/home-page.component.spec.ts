import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
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

  it('Should have a paragraph with content "PCDs"', () => {
    let primeiroParagrafo = fixture.nativeElement.querySelector('#paragrafo1');

    expect(primeiroParagrafo.innerHTML).toContain('PCDs');
  });

  it('Should have a button with content "Criar Partida"', () => {
    let botaoCriarPartida = fixture.nativeElement.querySelector('#buttonMesa');

    expect(botaoCriarPartida.innerHTML).toContain('Criar Partida');
  });
});
