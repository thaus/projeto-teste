import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Producers } from '../../../../shared/models/producers.model';
import { ProducersListComponent } from './producers-list/producers-list.component';

@Component({
  selector: 'app-producers-win-intervals',
  standalone: true,
  templateUrl: './producers-win-intervals.component.html',
  styleUrl: './producers-win-intervals.component.scss',
  imports: [CommonModule, ProducersListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProducersWinIntervalsComponent {
  @Input() data: Producers | undefined | null;
}
