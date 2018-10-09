import { TestBed, inject } from '@angular/core/testing';

import { BulmaService } from './angular-bulma.service';

describe('BulmaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BulmaService]
    });
  });

  it('should be created', inject([BulmaService], (service: BulmaService) => {
    expect(service).toBeTruthy();
  }));
});
