import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficModule } from '../traffic/traffic.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TrafficModule,
    Ng2SearchPipeModule,
    MatSlideToggleModule,
  ]
})
export class GatewaysModule { }
