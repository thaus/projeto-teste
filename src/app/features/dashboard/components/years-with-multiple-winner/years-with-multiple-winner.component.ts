import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { YearWithMultipleWinners } from '../../../../shared/models/years.model';

@Component({
  selector: 'app-years-with-multiple-winner',
  standalone: true,
  templateUrl: './years-with-multiple-winner.component.html',
  styleUrl: './years-with-multiple-winner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class YearsWithMultipleWinnerComponent {
  @Input() data: YearWithMultipleWinners[] | undefined | null;
}
