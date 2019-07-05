import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { MymovieComponent } from './mymovie/mymovie.component';
import {MoviesService} from './movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MyhomeComponent,
    MymovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
  exports: [MyhomeComponent, MymovieComponent]
})
export class AppModule { }
