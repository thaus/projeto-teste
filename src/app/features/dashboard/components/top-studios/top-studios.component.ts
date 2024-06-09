import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Studio } from '../../../../shared/models/studio.model';

@Component({
  selector: 'app-top-studios',
  standalone: true,
  templateUrl: './top-studios.component.html',
  styleUrl: './top-studios.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopStudiosComponent {
  @Input() data: Studio[] | undefined | null;
}
