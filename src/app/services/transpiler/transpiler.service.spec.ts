import { TestBed } from '@angular/core/testing';

import { TranspilerService } from './transpiler.service';

describe('TranspilerService', () => {
  let service: TranspilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranspilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
