import { Injectable } from '@angular/core';

@Injectable()
export class DirectivesImplementerService {

  constructor() { }

  data: string = "tODAY iS wEDNESDay"
  public getCammelCaseData(){
    var promice = new Promise((resolve,reject)=>{
        resolve(this.data);
    });
    return promice;
  }

}
