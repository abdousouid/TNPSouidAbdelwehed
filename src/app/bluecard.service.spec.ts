import { TestBed } from '@angular/core/testing';

import { BluecardService } from './bluecard.service';

describe('BluecardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BluecardService = TestBed.get(BluecardService);
    expect(service).toBeTruthy();
  });
});
