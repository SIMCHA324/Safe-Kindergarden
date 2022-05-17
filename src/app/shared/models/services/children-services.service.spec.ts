import { TestBed } from '@angular/core/testing';

import { ChildrenServicesService } from './children-services.service';

describe('ChildrenServicesService', () => {
  let service: ChildrenServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildrenServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
