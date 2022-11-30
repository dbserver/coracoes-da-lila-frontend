import { TestBed } from '@angular/core/testing';

import { AreaDeCompraService } from './area-de-compra.service';

describe('AreaDeCompraService', () => {
  let service: AreaDeCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaDeCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
