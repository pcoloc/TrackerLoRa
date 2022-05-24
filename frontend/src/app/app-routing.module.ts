import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { path: '', redirectTo: '/about', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      }
    ]
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
