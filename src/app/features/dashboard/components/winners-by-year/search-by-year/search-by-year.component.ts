import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-by-year',
  standalone: true,
  templateUrl: './search-by-year.component.html',
  styleUrl: './search-by-year.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class SearchByYearComponent {
  @Output() yearChanged = new EventEmitter<number | undefined>();

  selectedYear: number | undefined;

  initYearChanged(): void {
    this.yearChanged.emit(this.selectedYear);
  }
}
