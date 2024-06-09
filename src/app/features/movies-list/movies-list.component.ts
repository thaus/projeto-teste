import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie, MovieResponse } from '../../shared/models/movies.model';
import { MoviesService } from '../../shared/services/movies/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class MoviesListComponent implements OnInit {
  moviesResponse$: Observable<MovieResponse> = new Observable<MovieResponse>();

  private moviesService = inject(MoviesService);

  ngOnInit(): void {
    this.moviesResponse$ = this.moviesService.getAllMovies(0);
  }
}
