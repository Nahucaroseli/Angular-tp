import { TestBed } from '@angular/core/testing';

import { GameCartService } from './game-cart.service';

describe('GameCartService', () => {
  let service: GameCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
