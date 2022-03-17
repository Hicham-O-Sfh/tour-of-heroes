import { TestBed } from '@angular/core/testing';

import { DevelopperServiceService } from './developper.service';

describe('DevelopperServiceService', () => {
  let service: DevelopperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
