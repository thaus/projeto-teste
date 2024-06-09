import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { MoviesService } from '../../../../shared/services/movies/movies.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieByWinner } from '../../../../shared/models/movies.model';

@Component({
  selector: 'app-winners-by-year',
  standalone: true,
  templateUrl: './winners-by-year.component.html',
  styleUrl: './winners-by-year.component.scss',
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinnersByYearComponent {
  winnerByYear$: Observable<MovieByWinner[]> = new Observable<
    MovieByWinner[]
  >();
  selectedYear?: number;

  private moviesService = inject(MoviesService);

  searchWinnerByYear(): void {
    this.winnerByYear$ = this.moviesService.getWinnerbyYear(
      this.selectedYear as number
    );
  }
}
