import { ChangeDetectorRef, ViewRef, Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, SimpleChanges, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  testForm: FormGroup;
  
  //@Input('inputFirstName') 
  parentInputFirstName :string;
  
  localFirstName : string;

  constructor(private fb:FormBuilder,private cref:ChangeDetectorRef) {
    this.testForm = fb.group({
      FirstName : [null, null],
    });

    console.log(`new - FirstName is ${this.localFirstName}`);
  }

  ngOnChanges(changes:SimpleChanges) {

    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur  = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    //   console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }

    // this.localFirstName = this.testForm.value.FirstName;
    // console.log(`ngOnChanges - FirstName is ${this.localFirstName}`);
     console.log(`Parrent onchange `);
  }

  ngOnInit() {
    console.log(`ngOnInit  - FirstName is ${this.localFirstName}`);
  }

  ngDoCheck() {
    //this.localFirstName = this.testForm.get('FirstName').value;
    console.log(`ngDoCheck ${this.localFirstName}`);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit ${this.localFirstName}`);

  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked ${this.localFirstName}`);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  submit(){
    this.localFirstName = this.testForm.value.FirstName;
    this.parentInputFirstName = this.testForm.value.FirstName;
    console.log(`submit ${this.localFirstName}`);
  }
  
}
