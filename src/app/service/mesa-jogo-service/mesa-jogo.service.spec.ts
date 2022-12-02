import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MesaJogoService } from './mesa-jogo.service';

describe('MesaJogoService', () => {
  let service: MesaJogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MesaJogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
