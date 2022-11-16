import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrasComponent } from './regras.component';

describe('RegrasComponent', () => {
  let component: RegrasComponent;
  let fixture: ComponentFixture<RegrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
