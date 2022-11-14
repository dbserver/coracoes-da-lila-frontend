import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDoAdminComponent } from './menu-do-admin.component';

describe('MenuDoAdminComponent', () => {
  let component: MenuDoAdminComponent;
  let fixture: ComponentFixture<MenuDoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
