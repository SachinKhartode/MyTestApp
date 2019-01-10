import { TestBed, inject } from '@angular/core/testing';

import { TestDataServiceService } from './test-data-service.service';

describe('TestDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestDataServiceService]
    });
  });

  it('should be created', inject([TestDataServiceService], (service: TestDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
