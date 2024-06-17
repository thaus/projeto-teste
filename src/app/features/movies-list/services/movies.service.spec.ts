import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call next on currentPage with the correct value', () => {
    const page = 3;
    const spy = spyOn(service['currentPage'], 'next');

    service.setCurrentPage(page);

    expect(spy).toHaveBeenCalledWith(page);
  });
});
