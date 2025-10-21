import { TestBed } from '@angular/core/testing';

import { DatosApi } from './datos-api';

describe('DatosApi', () => {
  let service: DatosApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
