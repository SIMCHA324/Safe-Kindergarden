import { TestBed } from '@angular/core/testing';

import { ArrivalTimeService } from './arrival-time.service';

describe('ArrivalTimeService', () => {
  let service: ArrivalTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrivalTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
