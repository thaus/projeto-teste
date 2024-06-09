import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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
export class MoviesService {
  private readonly apiUrl = 'https://tools.texoit.com/backend-java/api/movies';

  private http = inject(HttpClient);

  getTopThreeStudiosWithWins(): Observable<Studio[]> {
    return this.http
      .get<Studios>(`${this.apiUrl}?projection=studios-with-win-count`)
      .pipe(map((data: Studios) => data.studios.slice(0, 3)));
  }

  getYearsWithMultipleWinners(): Observable<YearWithMultipleWinners[]> {
    return this.http
      .get<YearsWithMultipleWinners>(
        `${this.apiUrl}?projection=years-with-multiple-winners`
      )
      .pipe(map((data: YearsWithMultipleWinners) => data.years));
  }

  getProducersInterval(): Observable<Producers> {
    return this.http.get<Producers>(
      `${this.apiUrl}?projection=max-min-win-interval-for-producers`
    );
  }

  getWinnerbyYear(year?: number): Observable<MovieByWinner[]> {
    if (!year) {
      return of([]);
    }

    return this.http.get<MovieByWinner[]>(
      `${this.apiUrl}?winner=true&year=${year}`
    );
  }

  getAllMovies(paginaAtual: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${this.apiUrl}?page=${paginaAtual}&size=15`
    );
  }
}
