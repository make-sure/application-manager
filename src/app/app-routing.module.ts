import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewApplicationComponent } from './components/new-application/new-application.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';


const routes: Routes = [
  { path: 'new-application', component: NewApplicationComponent },
  { path: 'application-list', component: ApplicationListComponent },
  { path: 'edit-application', component: EditApplicationComponent },
  { path: '', component: ApplicationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
