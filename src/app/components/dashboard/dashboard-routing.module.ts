import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


import { PrimerpComponent } from './primerp/primerp.component';
import { SegundpComponent } from './segundp/segundp.component';
import { TercerpComponent } from './tercerp/tercerp.component';


const routes: Routes = [
{path: '',component: DashboardComponent, children:[
 
  {path:'',component: PrimerpComponent},
  {path:'segundop',component: SegundpComponent },
  {path:'tercerp',component: TercerpComponent },
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
