import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficModule } from '../traffic/traffic.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { GatewaysDialogComponent } from './gateways-dialog/gateways-dialog.component';
import {MatDialogModule, MatDialogRef, MatDialog} from '@angular/material/dialog';

@NgModule({
  declarations: [
    GatewaysDialogComponent,
  ],
  imports: [
    CommonModule,
    TrafficModule,
    Ng2SearchPipeModule,
    MatSlideToggleModule,
    MatDialogModule,

  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }, MatDialog],
})
export class GatewaysModule { }
