import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RxStompService } from '@stomp/ng2-stompjs';

import { MesaJogoComponent } from './mesa-jogo.component';

describe('MesaJogoComponent', () => {
  let component: MesaJogoComponent;
  let fixture: ComponentFixture<MesaJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaJogoComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [RxStompService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
