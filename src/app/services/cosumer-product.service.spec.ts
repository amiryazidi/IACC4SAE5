import { TestBed } from '@angular/core/testing';

import { CosumerProductService } from './cosumer-product.service';

describe('CosumerProductService', () => {
  let service: CosumerProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosumerProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
