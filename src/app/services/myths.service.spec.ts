import { TestBed } from '@angular/core/testing';

import { MythsService } from './myths.service';

describe('MythsService', () => {
  let service: MythsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MythsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
