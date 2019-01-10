import { Component, OnInit } from '@angular/core';
import { TestDataServiceService, Employee } from '../services/test-data-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  emp : Employee[];
  empSub : Observable<Employee[]>;
  constructor(private testDataServiceService: TestDataServiceService) { }
  

  ngOnInit() {
     this.testDataServiceService.getEmployees().subscribe(x=>{ this.emp = x;});


  // this.emp = this.testDataServiceService.getEmployees();//.subscribe(x=>{this.emp = x;});
   //this.empSub = this.testDataServiceService.getEmployees();
   //this.testDataServiceService.getEmployeesWithPromice().then(res=>{this.emp = res},err=>{});
  }

}
