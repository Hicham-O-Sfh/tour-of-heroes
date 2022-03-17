import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopperComponent } from './developper/developper.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { DevelopperDetailComponent } from './developper-detail/developper-detail.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    DevelopperComponent,
    MyNavbarComponent,
    DevelopperDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // indication du point d'entrée de l'application
})
export class AppModule { }
