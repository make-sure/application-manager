import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationComponent } from './components/application/application.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewApplicationComponent } from './components/new-application/new-application.component';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    ApplicationComponent,
    NewApplicationComponent,
    EditApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
