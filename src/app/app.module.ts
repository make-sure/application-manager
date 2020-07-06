import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationComponent } from './components/application/application.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewApplicationComponent } from './components/new-application/new-application.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    ApplicationComponent,
    NewApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
