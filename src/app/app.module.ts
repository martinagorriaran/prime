import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { InicioComponent } from './components/inicio/inicio.component';

//PRIME
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {ProgressBarModule} from 'primeng/progressbar';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';




import {ButtonModule} from 'primeng/button';


/*
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrimerpComponent } from './components/dashboard/primerp/primerp.component';
import { SegundpComponent } from './components/dashboard/segundp/segundp.component';
import { TercerpComponent } from './components/dashboard/tercerp/tercerp.component';*/

import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    

    /*
    DashboardComponent,
    PrimerpComponent,
    SegundpComponent,
    TercerpComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    SharedModule,
    CardModule,
    ProgressBarModule,
    ImageModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
