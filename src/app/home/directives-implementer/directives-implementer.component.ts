import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DirectivesImplementerService } from './directives-implementer.service';

@Component({
  selector: 'app-directives-implementer',
  templateUrl: './directives-implementer.component.html',
  styleUrls: ['./directives-implementer.component.css']
})
export class DirectivesImplementerComponent implements OnInit {

  cammelCaseData : string="Sachin";
  newcammelCaseData : string[];

  constructor(private cammelCaseService: DirectivesImplementerService) { }

  ngOnInit() {
    this.cammelCaseService.getCammelCaseData().then((data:any) => {
        this.cammelCaseData = data;
      });
  }

  getCammelCaseData(data: string[]){
    this.newcammelCaseData = data;
    //console.log('Debugger (Parent Updated Camelcase ):' + this.newcammelCaseData ); // logs undefined
  }

}
