import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { EurPipe } from './pipes/eur.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EurPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {dateFormat: 'dd-MM-YYYY'}}
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
