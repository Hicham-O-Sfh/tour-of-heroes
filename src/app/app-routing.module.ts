import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevelopperDetailComponent } from './developper-detail/developper-detail.component';
import { DevelopperComponent } from './developper/developper.component';

const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: "Dashboard", component: DashboardComponent },
  { path: "Detail/:id", component: DevelopperDetailComponent },
  { path: "Developpeurs-de-SQLI", component: DevelopperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
