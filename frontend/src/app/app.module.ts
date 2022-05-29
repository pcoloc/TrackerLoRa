import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';


import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GravatarDirective } from './gravatar.directive';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GatewaysComponent } from './gateways/gateways.component';
import { ApiComponent } from './api/api.component';
import { HealthComponent } from './health/health.component';
import { NodesComponent } from './nodes/nodes.component';
import { GatewayDetailComponent } from './gateways/gateway-detail/gateway-detail.component';
import { NodeDetailComponent } from './nodes/node-detail/node-detail.component';
import { TrafficModule } from './traffic/traffic.module';
import { RankingComponent } from './ranking/ranking.component';
import { MonitoreosComponent } from './monitoreos/monitoreos.component';
import { LoraComponent } from './lora/lora.component';
import { RelacionesComponent } from './relaciones/relaciones.component';
import { MonitoreoDetailComponent } from './monitoreos/monitoreo-detail/monitoreo-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChartModule } from './ranking/chart/chart.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    GravatarDirective,
    PageNotFoundComponent,
    GatewaysComponent,
    ApiComponent,
    HealthComponent,
    NodesComponent,
    GatewayDetailComponent,
    NodeDetailComponent,
    RankingComponent,
    MonitoreosComponent,
    LoraComponent,
    RelacionesComponent,
    MonitoreoDetailComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false, relativeLinkResolution: 'corrected' }),
    PerfectScrollbarModule,
    MatFormFieldModule,
    MatInputModule,
    TrafficModule,
    ChartModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    Title,
  ],
  bootstrap: [AppComponent]


})
export class AppModule { }
