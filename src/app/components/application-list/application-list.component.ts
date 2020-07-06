import { Component, OnInit } from '@angular/core';
import { Application } from '../../modules/Application';
import { ApplicationService } from '../../services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications:Application[];
  selectedApplication:Application;
  newUserFlag:Boolean;

  constructor(private applicationService: ApplicationService, private router: Router) { }

  ngOnInit(): void {
    this.applicationService.getApplications().subscribe(applications => { this.applications = applications; });
  }

  deleteApplication(application:Application) {
    this.applications = this.applications.filter(app => app.id != application.id);
    this.applicationService.deleteApplication(application).subscribe();  
  }

  onSelect(application:Application): void {
    this.selectedApplication=application;
  }

  newUserDialog() {
    //this.router.navigate(['new-application']);
    this.newUserFlag=true;
  }
}
