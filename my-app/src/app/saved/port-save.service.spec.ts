import { TestBed } from '@angular/core/testing';

import { PortSaveService } from './port-save.service';

describe('PortSaveService', () => {
  let service: PortSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
