import { TestBed } from '@angular/core/testing';

import { ConfigBDService } from './config-bd.service';

describe('ConfigBDService', () => {
  let service: ConfigBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
