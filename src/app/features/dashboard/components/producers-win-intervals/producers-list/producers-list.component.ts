import { Component, Input } from '@angular/core';
import { Producer } from '../../../../../shared/models/producers.model';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-producers-list',
  standalone: true,
  templateUrl: './producers-list.component.html',
  styleUrl: './producers-list.component.scss',
  imports: [CommonModule, LoaderComponent],
})
export class ProducersListComponent {
  @Input() data: Producer[] | undefined;
}
