import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaCriadaComponent } from './mesa-criada.component';

describe('MesaCriadaComponent', () => {
  let component: MesaCriadaComponent;
  let fixture: ComponentFixture<MesaCriadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaCriadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaCriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
