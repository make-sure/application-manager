import { Component, OnInit } from '@angular/core';
import { Application } from '../../modules/Application';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications:Application[];
  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationService.getApplications().subscribe(applications => { this.applications = applications; });
  }

}
