import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { HealthComponent } from './health/health.component';

import { FullComponent } from './layouts/full/full.component';
import { MonitoreosComponent } from './monitoreos/monitoreos.component';
import { NodesComponent } from './nodes/nodes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RankingComponent } from './ranking/ranking.component';
export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
      },
       {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
        data : { title: 'About' }
      },
      {
        path: 'gateways', pathMatch: 'full', component: GatewaysComponent, data: { title: 'Gateways' }
      },
      {
        path: 'nodes', pathMatch: 'full', component: NodesComponent, data: { title: 'Nodes' }
      },
      {
        path: 'ranking', pathMatch: 'full', component: RankingComponent, data: { title: 'Ranking' }
      },
      {
        path: 'api', pathMatch: 'full', component: ApiComponent, data: { title: 'API' }
      },
      {
        path: 'monitoreos', pathMatch: 'full', component: MonitoreosComponent, data: { title: 'Monitoreos' }
      },
      {
        path: 'status', pathMatch: 'full', component: HealthComponent, data: { title: 'Status' }
      }
    ]
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent, data: { title: 'Page Not Found' } },
];
