import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  styleUrls: ['./unit-testing.component.css']
})
export class UnitTestingComponent implements OnInit {
  counter=0;
  string1 = 1
  string2:any = 'A'
  constructor() { }

  ngOnInit() {
  }
  AddEmployee(){
    this.string2 =1;
    this.counter++;

  }
}
