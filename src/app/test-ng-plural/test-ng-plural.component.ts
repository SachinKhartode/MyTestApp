import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test-ng-plural]',
  // template: `
  // <div>
  // print value : {{value}}
  // </div>`,
  templateUrl: './test-ng-plural.component.html',
  styleUrls: ['./test-ng-plural.component.css'],
})
export class TestNgPluralComponent implements OnInit {

  constructor() { }
  
  value: string = "sachin";

  ngOnInit() {
  }

}
    