import { TestBed, inject } from '@angular/core/testing';

import { DirectivesImplementerService } from './directives-implementer.service';

describe('DirectivesImplementerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectivesImplementerService]
    });
  });

  it('should be created', inject([DirectivesImplementerService], (service: DirectivesImplementerService) => {
    expect(service).toBeTruthy();
  }));
});
