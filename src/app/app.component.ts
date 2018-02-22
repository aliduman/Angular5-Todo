import { Component, OnInit } from '@angular/core';
import { ToDoComponent } from './to-do/to-do.component';

@Component({
	// tslint:disable-next-line:indent
	selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  task= [];
  constructor() {

  }
  ngOnInit() {

  }
}
