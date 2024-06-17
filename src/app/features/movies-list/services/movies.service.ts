import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private currentPage = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPage.asObservable();

  constructor() {}

  setCurrentPage(page: number) {
    this.currentPage.next(page);
  }
}
