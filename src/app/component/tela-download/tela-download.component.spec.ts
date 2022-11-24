import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDownloadComponent } from './tela-download.component';

describe('TelaDownloadComponent', () => {
  let component: TelaDownloadComponent;
  let fixture: ComponentFixture<TelaDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
