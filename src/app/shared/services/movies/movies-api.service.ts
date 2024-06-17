import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Producers } from '../../models/producers.model';
import { Studio, Studios } from '../../models/studio.model';
import {
  YearWithMultipleWinners,
  YearsWithMultipleWinners,
} from '../../models/years.model';
import { MovieByWinner, MovieResponse } from '../../models/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private readonly apiUrl = 'https://tools.texoit.com/backend-java/api/movies';
  private readonly loadingTime = 500;

  private http = inject(HttpClient);

  getTopStudiosWithWins(top: number = 3): Observable<Studio[]> {
    return this.http
      .get<Studios>(`${this.apiUrl}?projection=studios-with-win-count`)
      .pipe(
        map((data: Studios) => data.studios.slice(0, top)),
        delay(this.loadingTime)
      );
  }

  getYearsWithMultipleWinners(): Observable<YearWithMultipleWinners[]> {
    return this.http
      .get<YearsWithMultipleWinners>(
        `${this.apiUrl}?projection=years-with-multiple-winners`
      )
      .pipe(
        map((data: YearsWithMultipleWinners) => data.years),
        delay(this.loadingTime)
      );
  }

  getProducersInterval(): Observable<Producers> {
    return this.http
      .get<Producers>(
        `${this.apiUrl}?projection=max-min-win-interval-for-producers`
      )
      .pipe(delay(this.loadingTime));
  }

  getWinnerbyYear(year?: number): Observable<MovieByWinner[]> {
    if (!year) {
      return of([]).pipe(delay(this.loadingTime));
    }

    return this.http
      .get<MovieByWinner[]>(`${this.apiUrl}?winner=true&year=${year}`)
      .pipe(delay(this.loadingTime));
  }

  getAllMovies(
    paginaAtual?: number,
    year?: number,
    winner?: boolean,
    size: number = 15
  ): Observable<MovieResponse> {
    return this.http
      .get<MovieResponse>(
        `${this.apiUrl}?page=${paginaAtual}&size=${size}&year=${year}&winner=${winner}`
      )
      .pipe(delay(this.loadingTime));
  }
}
