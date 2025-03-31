import { TestBed } from '@angular/core/testing';

import { LoudticketapiService } from './loudticketapi.service';

describe('LoudticketapiService', () => {
  let service: LoudticketapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoudticketapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
