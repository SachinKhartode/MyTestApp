import { Component, OnInit, Inject, Injectable, Optional } from '@angular/core';
import { OtherService } from './OtherService.service';

//@Injectable()
export class SimpleService {
  otherService: OtherService;

//   constructor() { 
//     console.log('SimpleService constructor');
//   };

  constructor(@Optional() otherService: OtherService) {
    this.otherService = otherService;
    console.log('SimpleService constructor');
  };

    // constructor(@Inject(OtherService) otherService: OtherService) {
    //     debugger
    //     this.otherService = otherService;
    //     this.otherService.getData();
    //     console.log('SimpleService constructor');
    // };

}