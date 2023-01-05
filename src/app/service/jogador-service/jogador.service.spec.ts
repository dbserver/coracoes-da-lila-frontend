import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { JogadorService } from './jogador.service';

describe('Service: Jogador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogadorService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([JogadorService], (service: JogadorService) => {
    expect(service).toBeTruthy();
  }));
});
