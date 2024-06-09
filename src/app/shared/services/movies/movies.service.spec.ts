import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';
import { Studios } from '../../models/studio.model';
import { YearsWithMultipleWinners } from '../../models/years.model';
import { MovieByWinner } from '../../models/movies.model';
import { Producers } from '../../models/producers.model';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return top three studios with wins', () => {
    const mockResponse: Studios = {
      studios: [
        { name: 'Studio A', winCount: 10 },
        { name: 'Studio B', winCount: 8 },
        { name: 'Studio C', winCount: 7 },
        { name: 'Studio D', winCount: 5 },
      ],
    };

    service.getTopThreeStudiosWithWins().subscribe((studios) => {
      expect(studios.length).toBe(3);
      expect(studios).toEqual(mockResponse.studios.slice(0, 3));
    });

    const req = httpMock.expectOne(
      `${service['apiUrl']}?projection=studios-with-win-count`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle error in getTopThreeStudiosWithWins', () => {
    const mockError = new Error('error');
    spyOn(service, 'getTopThreeStudiosWithWins').and.returnValue(
      throwError(() => mockError)
    );

    service.getTopThreeStudiosWithWins().subscribe({
      next: () => {
        fail('expected an error, not producers');
      },
      error: (error) => {
        expect(error).toBe(mockError);
      },
    });
  });

  it('should return years with multiple winners', () => {
    const mockResponse: YearsWithMultipleWinners = {
      years: [
        { year: 2001, winnerCount: 2 },
        { year: 2002, winnerCount: 3 },
      ],
    };

    service.getYearsWithMultipleWinners().subscribe((years) => {
      expect(years).toEqual(mockResponse.years);
    });

    const req = httpMock.expectOne(
      `${service['apiUrl']}?projection=years-with-multiple-winners`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle error in getYearsWithMultipleWinners', () => {
    const mockError = new Error('error');
    spyOn(service, 'getYearsWithMultipleWinners').and.returnValue(
      throwError(() => mockError)
    );

    service.getYearsWithMultipleWinners().subscribe({
      next: () => {
        fail('expected an error, not years');
      },
      error: (error) => {
        expect(error).toBe(mockError);
      },
    });
  });

  it('should return producers interval', () => {
    const mockResponse: Producers = {
      min: [
        {
          producer: 'Producer A',
          interval: 1,
          previousWin: 2000,
          followingWin: 2001,
        },
      ],
      max: [
        {
          producer: 'Producer B',
          interval: 10,
          previousWin: 1990,
          followingWin: 2000,
        },
      ],
    };

    service.getProducersInterval().subscribe((producers) => {
      expect(producers).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${service['apiUrl']}?projection=max-min-win-interval-for-producers`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle error in getProducersInterval', () => {
    const mockError = new Error('error');
    spyOn(service, 'getProducersInterval').and.returnValue(
      throwError(() => mockError)
    );

    service.getProducersInterval().subscribe({
      next: () => {
        fail('expected an error, not producers');
      },
      error: (error) => {
        expect(error).toBe(mockError);
      },
    });
  });

  it('should return winner by year', () => {
    const year = 2000;
    const mockResponse: MovieByWinner[] = [
      { id: 1, year: 2000, title: 'Movie A' },
      { id: 2, year: 2000, title: 'Movie B' },
    ];

    service.getWinnerbyYear(year).subscribe((movies) => {
      expect(movies).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${service['apiUrl']}?winner=true&year=${year}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should return an empty array when year is undefined', () => {
    const year = undefined;

    service.getWinnerbyYear(year).subscribe((movies) => {
      expect(movies).toEqual([]);
    });
  });

  it('should handle error in getWinnerbyYear', () => {
    const year = 2000;
    const mockError = new Error('error');
    spyOn(service, 'getWinnerbyYear').and.returnValue(
      throwError(() => mockError)
    );

    service.getWinnerbyYear(year).subscribe({
      next: () => {
        fail('expected an error, not movies');
      },
      error: (error) => {
        expect(error).toBe(mockError);
      },
    });
  });
});
