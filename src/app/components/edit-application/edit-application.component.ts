import { Component, OnInit, Input } from '@angular/core';
import { Application } from 'src/app/modules/Application';
import { ApplicationService } from 'src/app/services/application.service';
import { Router, ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnInit {
  appToEditId:number;
  appToEdit:Application={id:0, name:"", email:"", age:0, phone:"", english:"", communication:"", skills:"", personality:"", homeStudy:false};
  sub: any;
  
  constructor(private applicationService: ApplicationService, private router: Router, private route: ActivatedRoute){ 
  }

  ngOnInit(): void {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.appToEditId = +params['application'] || 0;
    });
    if(this.appToEditId!=0)
    this.applicationService.getApplication(this.appToEditId).subscribe(application => { this.appToEdit = application; });
  }

  editApplication() {
    this.applicationService.editApplication(this.appToEdit).subscribe( data => {
      this.router.navigate(['']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
