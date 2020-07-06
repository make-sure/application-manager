import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewApplicationComponent } from './components/new-application/new-application.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';


const routes: Routes = [

  { path: 'new-application', component: NewApplicationComponent },
  { path: 'application-list', component: ApplicationListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
