import { Component as MyComponent, OnInit, Inject, Injectable } from '@angular/core';
import { TestDataServiceService } from '../services/test-data-service.service';
import { SimpleService } from '../services/SimpleService.service';
import { OtherService } from '../services/OtherService.service';

@MyComponent({
  selector: 'app-constructor-decorator',
  templateUrl: './constructor-decorator.component.html',
  styleUrls: ['./constructor-decorator.component.css'],
  providers: [TestDataServiceService,OtherService, SimpleService],
})
export class ConstructorDecoratorComponent implements OnInit {
  //otherService: OtherService;
  constructor(private simpleService: SimpleService,private otherService: OtherService) {
    console.log('ConstructorDecoratorComponent constructor');
   }
     

  ngOnInit() {
  }

}
 