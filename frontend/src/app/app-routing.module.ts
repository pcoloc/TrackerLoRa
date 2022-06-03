import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogarithmicScale } from 'chart.js';
import { ApiComponent } from './api/api.component';
import { GatewayDetailComponent } from './gateways/gateway-detail/gateway-detail.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { HealthComponent } from './health/health.component';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { LoraComponent } from './lora/lora.component';
import { MonitoreoDetailComponent } from './monitoreos/monitoreo-detail/monitoreo-detail.component';
import { MonitoreosComponent } from './monitoreos/monitoreos.component';
import { NodeDetailComponent } from './nodes/node-detail/node-detail.component';
import { NodesComponent } from './nodes/nodes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RankingComponent } from './ranking/ranking.component';
import { RegisterComponent } from './register/register.component';
import { RelacionesComponent } from './relaciones/relaciones.component';
import { AuthGuard } from './shared/auth.guard';
export const Approutes: Routes = [
  {
    path: '',

    component: FullComponent,
    children: [
      { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard],
        data: { title: 'Home - TrackerLoRa', breadcrumb: 'DASHBOARD' }
      },
       {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule), canActivate: [AuthGuard],
        data : { title: 'About' }
      },
      {
        path: 'gateways', pathMatch: 'full', component: GatewaysComponent,  canActivate: [AuthGuard], data: { title: 'Gateways - TrackerLoRa' }
      },
      {
        path: 'gateways/:name', pathMatch: 'full', component: GatewayDetailComponent, canActivate: [AuthGuard], data: { title: 'Gateway Details - TrackerLoRa' }
      },
      {
        path: 'nodes', pathMatch: 'full', component: NodesComponent, canActivate: [AuthGuard], data: { title: 'Nodes - TrackerLoRa' }
      },
      {
        path: 'nodes/:name', pathMatch: 'full', component: NodeDetailComponent,canActivate: [AuthGuard], data: { title: 'Node Details - TrackerLoRa' }
      },
      {
        path: 'relaciones', pathMatch: 'full', component: RelacionesComponent, canActivate: [AuthGuard], data: { title: 'Relaciones - TrackerLoRa' }
      },
      {
        path: 'ranking', pathMatch: 'full', component: RankingComponent, canActivate: [AuthGuard], data: { title: 'Ranking - TrackerLoRa' }
      },
      {
        path: 'lora', pathMatch: 'full', component: LoraComponent, canActivate: [AuthGuard], data: { title: 'LoRa - TrackerLoRa' }
      },
      {
        path: 'api', pathMatch: 'full', component: ApiComponent, canActivate: [AuthGuard], data:  { title: 'API - TrackerLoRa' }
      },
      {
        path: 'monitoreos', pathMatch: 'full', component: MonitoreosComponent, canActivate: [AuthGuard], data: { title: 'Monitoreos - TrackerLoRa' }
      },
      {
        path: 'monitoreos/:ip', pathMatch: 'full', component: MonitoreoDetailComponent, canActivate: [AuthGuard], data: { title: 'Ip Detail - TrackerLoRa' }
      },
      {
        path: 'status', pathMatch: 'full', component: HealthComponent, canActivate: [AuthGuard], data: { title: 'Status - TrackerLoRa' }
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', pathMatch: 'full', component: LoginComponent, data: { title: 'Welcome to TrackerLoRa' } },
  { path: 'register', pathMatch: 'full', component: RegisterComponent, data: { title: 'Sign In - TrackerLoRa' } },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent, data: { title: 'Page Not Found - TrackerLoRa' } },
];
