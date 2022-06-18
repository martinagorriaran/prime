import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio',component: InicioComponent},
  {path: 'dashboard', loadChildren: ()=> import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
