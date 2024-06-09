import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersByYearComponent } from './winners-by-year.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { MovieByWinner } from '../../../../shared/models/movies.model';
import { of } from 'rxjs';
import { MockProvider } from 'ng-mocks';
import { MoviesService } from '../../../../shared/services/movies/movies.service';

describe('WinnersByYearComponent', () => {
  let component: WinnersByYearComponent;
  let fixture: ComponentFixture<WinnersByYearComponent>;
  let mockMovieService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersByYearComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        MockProvider(MoviesService),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnersByYearComponent);
    component = fixture.componentInstance;
    mockMovieService = TestBed.inject(MoviesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the winner by year', () => {
    const mockMovies: MovieByWinner[] = [
      { id: 1, year: 2000, title: 'Movie A' },
      { id: 2, year: 2000, title: 'Movie B' },
    ];
    const mock = spyOn(mockMovieService, 'getWinnerbyYear').and.returnValue(
      of(mockMovies)
    );
    component.selectedYear = 2000;

    component.searchWinnerByYear();

    expect(mock).toHaveBeenCalledWith(2000);
    component.winnerByYear$.subscribe((movies) => {
      expect(movies).toEqual(mockMovies);
    });
  });

  it('should handle empty year case', () => {
    const mock = spyOn(mockMovieService, 'getWinnerbyYear').and.returnValue(
      of([])
    );
    component.selectedYear = undefined;

    component.searchWinnerByYear();

    expect(mock).toHaveBeenCalledWith(undefined);
    component.winnerByYear$.subscribe((movies) => {
      expect(movies).toEqual([]);
    });
  });
});
