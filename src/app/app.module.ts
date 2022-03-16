import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopperComponent } from './developper/developper.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { DevelopperDetailComponent } from './developper-detail/developper-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DevelopperComponent,
    MyNavbarComponent,
    DevelopperDetailComponent
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
