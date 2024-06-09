import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then(
        (m) => m.dashboardRoutes
      ),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./features/movies-list/movies-list.routes').then(
        (m) => m.moviesListRoutes
      ),
  },
];
