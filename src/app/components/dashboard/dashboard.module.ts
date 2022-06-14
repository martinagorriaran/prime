import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

import { PrimerpComponent } from './primerp/primerp.component';
import { SegundpComponent } from './segundp/segundp.component';
import { TercerpComponent } from './tercerp/tercerp.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PrimerpComponent,
    SegundpComponent,
    TercerpComponent,
    NavbarComponent
  ],
  imports: [

    CommonModule,
    SharedModule,
    DashboardRoutingModule 
  ]
})
export class DashboardModule { }
