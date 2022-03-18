import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopperComponent } from './developper/developper.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { DevelopperDetailComponent } from './developper-detail/developper-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DevelopperComponent,
    MyNavbarComponent,
    DevelopperDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // indication du point d'entrée de l'application
})
export class AppModule { }
