import { TestBed } from '@angular/core/testing';

import { WorkWithLocalStorageService } from './work-with-local-storage.service';

describe('WorkWithLocalStorageService', () => {
  let service: WorkWithLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkWithLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
