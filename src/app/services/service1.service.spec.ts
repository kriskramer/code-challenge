import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Service1Service } from './service1.service';

describe('Service1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: Service1Service = TestBed.get(Service1Service);
    expect(service).toBeTruthy();
  });

  it('should have a baseUrl', () => {
    const service: Service1Service = TestBed.get(Service1Service);
    expect(service.baseUrl).toContain('https://random-data-api.com/api/');
  })
});
