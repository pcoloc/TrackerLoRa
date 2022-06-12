import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { TopCardsComponent } from "./dashboard-components/top-cards/top-cards.component";
import { MapComponent } from './dashboard-components/map/map.component';
import { TrafficModule } from '../traffic/traffic.module';
import { lora } from '../shared/lora';
import { AddLocationComponent } from './dashboard-components/map/add-location/add-location.component';
const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    TrafficModule
  ],
  declarations: [
    DashboardComponent,
    TopCardsComponent,
    MapComponent,
    AddLocationComponent,
  ],
  providers: [lora],
})
export class DashboardModule {}
