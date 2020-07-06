import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
//import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Application } from 'src/app/modules/Application';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {
 // addForm: FormGroup;
  newApplication:any = {};
  constructor(private applicationService: ApplicationService, private router: Router) { 
   
  }

  ngOnInit(): void {
    /*this.addForm = this.formBuilder.group({
      name: '',
      email: ''
    });*/
  }

  createApplication() {
    console.log(this.newApplication);

    this.applicationService.createApplication(this.newApplication).subscribe( data => {
      this.router.navigate(['application-list']);
    });
  }

}
