import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProducersWinIntervalsComponent } from './components/producers-win-intervals/producers-win-intervals.component';
import { TopStudiosComponent } from './components/top-studios/top-studios.component';
import { WinnersByYearComponent } from './components/winners-by-year/winners-by-year.component';
import { YearsWithMultipleWinnerComponent } from './components/years-with-multiple-winner/years-with-multiple-winner.component';
import { Observable, map, take } from 'rxjs';
import { MoviesService } from '../../shared/services/movies/movies.service';
import { CommonModule } from '@angular/common';
import { Producers } from '../../shared/models/producers.model';
import { Studio } from '../../shared/models/studio.model';
import { YearWithMultipleWinners } from '../../shared/models/years.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    CommonModule,
    ProducersWinIntervalsComponent,
    TopStudiosComponent,
    WinnersByYearComponent,
    YearsWithMultipleWinnerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  topThreeStudios$: Observable<Studio[]> = new Observable<Studio[]>();
  yearsWithMultipleWinner$: Observable<YearWithMultipleWinners[]> =
    new Observable<YearWithMultipleWinners[]>();
  producersInterval$: Observable<Producers> = new Observable<Producers>();

  private moviesService = inject(MoviesService);

  ngOnInit(): void {
    this.topThreeStudios$ = this.moviesService.getTopThreeStudiosWithWins();
    this.yearsWithMultipleWinner$ =
      this.moviesService.getYearsWithMultipleWinners();
    this.producersInterval$ = this.moviesService.getProducersInterval();
  }
}
