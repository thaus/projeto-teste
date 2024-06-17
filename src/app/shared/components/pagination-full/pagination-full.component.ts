import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  SimpleChanges,
  input,
  model,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-pagination-full',
  standalone: true,
  templateUrl: './pagination-full.component.html',
  styleUrl: './pagination-full.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PaginationFullComponent implements OnInit {
  totalPages = input<number>();
  currentPage = model<number>(0);

  pages = signal<number[]>([]);

  ngOnInit(): void {
    this.generatePagesByTotalPages();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalPages']) {
      this.generatePagesByTotalPages();
    }
  }

  generatePagesByTotalPages(): void {
    const pagesArray = Array.from(
      new Array(this.totalPages()),
      (_, i) => i + 1
    );
    this.pages.set(pagesArray);
  }

  setCurrentPage(currentPage: number): void {
    this.currentPage?.set(currentPage);
  }
}
