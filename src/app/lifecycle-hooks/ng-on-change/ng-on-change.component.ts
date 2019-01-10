import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-change',
  templateUrl: './ng-on-change.component.html',
  styleUrls: ['./ng-on-change.component.css']
})
export class NgOnChangeComponent implements OnInit, OnChanges {

  constructor() { }
  
  @Input('inputFirstName') inputFirstName :string = "Test";

  ngOnInit() {
  }

  
  ngOnChanges(changes:SimpleChanges) {

    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`Chield Component property ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    console.log(`Child Component ngOnChanges - inputFirstName is ${this.inputFirstName}`);
  }

}
