import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevelopperDetailComponent } from './developper-detail/developper-detail.component';
import { DevelopperModifierComponent } from './developper-modifier/developper-modifier.component';
import { DevelopperComponent } from './developper/developper.component';
import { SqliPresentationComponent } from './sqli-presentation/sqli-presentation.component';

const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: "Dashboard", component: DashboardComponent },
  { path: "Developpeurs-de-SQLI/Detail/:id", component: DevelopperDetailComponent },
  { path: "Developpeurs-de-SQLI/Modifier/:id", component: DevelopperModifierComponent },
  { path: "Developpeurs-de-SQLI", component: DevelopperComponent },
  { path: "Presentation-de-SQLI", component: SqliPresentationComponent },
  // { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
