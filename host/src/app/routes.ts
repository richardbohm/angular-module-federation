import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('remote/component').then((m) => m.RemoteEntryComponent),
  },
  {
    path: 'remote',
    loadComponent: () => import('remote/component').then((m) => m.RemoteEntryComponent),
  }

];
