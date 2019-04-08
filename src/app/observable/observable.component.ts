import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { TestDataServiceService, Employee } from '../services/test-data-service.service';
import { Observable } from 'rxjs/Observable';
import { ElementDef } from '@angular/core/src/view';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
  host: {
    '(window:blur)': 'focusOutFunction($event)',
    '(window:focus)': 'focusInFunction($event)',
    // 'style':'background-color:blue'
  }
})
export class ObservableComponent implements OnInit {
  emp : Employee[];
  empSub : Observable<Employee[]>;

  constructor(private testDataServiceService: TestDataServiceService) {   
  }  
  
  @ViewChild('tempdiv') tempviewref:ElementRef;

  ngOnInit() {
     this.testDataServiceService.getEmployees().subscribe((x)=>{ 
       debugger;
        x.subscribe(y=> {
           this.emp=y.json();          
        });
      });


  // this.emp = this.testDataServiceService.getEmployees();//.subscribe(x=>{this.emp = x;});
   //this.empSub = this.testDataServiceService.getEmployees();
   //this.testDataServiceService.getEmployeesWithPromice().then(res=>{this.emp = res},err=>{});
  }

  focusOutFunction(event)
  {
    this.tempviewref.nativeElement.style.backgroundColor='red';
    console.log('out');
    
  }
  focusInFunction(event)
  {
    this.tempviewref.nativeElement.style.backgroundColor='green';
    console.log('in');
  }
}
