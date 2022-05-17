import { TestBed } from '@angular/core/testing';

import { LnstitutionService } from './lnstitution.service';

describe('LnstitutionService', () => {
  let service: LnstitutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LnstitutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
