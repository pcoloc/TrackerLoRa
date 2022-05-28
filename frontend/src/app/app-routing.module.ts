import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { HealthComponent } from './health/health.component';

import { FullComponent } from './layouts/full/full.component';
import { NodesComponent } from './nodes/nodes.component';
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
       {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'gateways', pathMatch: 'full', component: GatewaysComponent
      },
      {
        path: 'nodes', pathMatch: 'full', component: NodesComponent
      },
      {
        path: 'api', pathMatch: 'full', component: ApiComponent
      },
      {
        path: 'status', pathMatch: 'full', component: HealthComponent
      }
    ]
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
