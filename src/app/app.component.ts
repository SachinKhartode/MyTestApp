import { Component, SimpleChanges, OnChanges, Inject, Optional, Self, ViewEncapsulation } from '@angular/core';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnChanges {
  title = 'app';

  constructor(){
    //.getJSON("http://jsonip.com?callback=?", function (data) {}
     
   
  } 
 
 // test :string ="";
  ngOnChanges(change:SimpleChanges) {debugger;
    //this.data = this.testForm.get('data').value;
    console.log(`ngOnChanges - data is ${change}`);
  }

}
