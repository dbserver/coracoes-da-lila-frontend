import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaJogadoresComponent } from './area-jogadores.component';

describe('AreaJogadoresComponent', () => {
  let component: AreaJogadoresComponent;
  let fixture: ComponentFixture<AreaJogadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaJogadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
