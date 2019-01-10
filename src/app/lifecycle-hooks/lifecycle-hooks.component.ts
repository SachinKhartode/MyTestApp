import { ChangeDetectorRef, ViewRef, Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, SimpleChanges, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  testForm: FormGroup;
  
  @Input('data') data : string;

  constructor(private fb:FormBuilder,private cref:ChangeDetectorRef) {
    this.testForm = fb.group({
      data : [null, null],
    });

    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges(change:SimpleChanges) {
    //this.data = this.testForm.get('data').value;
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
    debugger;
    this.cref.markForCheck();
  }

  ngDoCheck() {
    //this.data = this.testForm.get('data').value;

    console.log(`ngDoCheck ${this.data}`);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit ${this.data}`);

  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked ${this.data}`);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  submit(form:FormGroup){debugger;
    this.data = form.value.data;
    console.log(`submit ${this.data}`);
  }
  
}
