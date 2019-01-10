import { Component, OnInit, ViewEncapsulation} from '@angular/core';
// import { transition, style } from '@angular/core/src/animation/dsl';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  animations:[trigger('testAnimation',[transition(':enter',
        [animate(500,style({transform:'translateY(50%)'}))])])],
  styles:[
    `.yellowCard {border: 4px solid red;}`
  ],
  encapsulation: ViewEncapsulation.Native
})
export class FileUploadComponent implements OnInit {
  
  token : "TEST";
  
//   afuConfig = {
//     uploadAPI: {
//       url:"https://example-file-upload-api"
//     }
// };

  constructor() { }

  ngOnInit() {
   
  }

}
