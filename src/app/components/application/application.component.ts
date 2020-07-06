import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../../modules/Application';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  @Input() application:Application;

  constructor() { }

  ngOnInit(): void {
  }

}
