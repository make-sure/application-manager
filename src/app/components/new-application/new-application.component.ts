import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { Application } from 'src/app/modules/Application';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {
  newApplication:any = {};
  constructor(private applicationService: ApplicationService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  createApplication(form) {
    this.applicationService.createApplication(this.newApplication).subscribe( data => {
      this.router.navigate(['']);
    });
  }

  

}
