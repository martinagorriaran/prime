import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

import { PrimerpComponent } from './primerp/primerp.component';
import { SegundpComponent } from './segundp/segundp.component';
import { TercerpComponent } from './tercerp/tercerp.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PrimerpComponent,
    SegundpComponent,
    TercerpComponent,
  ],
  imports: [

    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],

  exports:[
    PrimerpComponent,
    SegundpComponent,
    TercerpComponent,]
})
export class DashboardModule { }
