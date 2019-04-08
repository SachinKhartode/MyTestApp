// This is parent component of ng-template componet
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
