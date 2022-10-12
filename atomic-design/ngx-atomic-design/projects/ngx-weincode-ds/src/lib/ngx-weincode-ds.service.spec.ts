import { TestBed } from '@angular/core/testing';

import { NgxWeincodeDsService } from './ngx-weincode-ds.service';

describe('NgxWeincodeDsService', () => {
  let service: NgxWeincodeDsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWeincodeDsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
