import { Injectable } from "@angular/core";

//@Injectable()
export class OtherService {
    constructor() { 
      console.log('OtherService constructor');
    };

    getData()
    {
      console.log('This is data from OtherService');
    }
  }
  
  