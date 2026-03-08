import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'solutions/hotel',
    loadComponent: () => import('./pages/hotel-solutions/hotel-solutions.component').then(m => m.HotelSolutionsComponent)
  },
  {
    path: 'solutions/restaurant',
    loadComponent: () => import('./pages/restaurant-solutions/restaurant-solutions.component').then(m => m.RestaurantSolutionsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
