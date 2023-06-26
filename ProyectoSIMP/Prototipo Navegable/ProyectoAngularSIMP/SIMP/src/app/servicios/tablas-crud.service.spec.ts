import { TestBed } from '@angular/core/testing';

import { TablasCRUDService } from './tablas-crud.service';

describe('TablasCRUDService', () => {
  let service: TablasCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablasCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
