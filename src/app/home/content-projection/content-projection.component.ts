import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Joke } from '../../modules/Joke';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

 jokes: Joke[];

  constructor(){
  }
  
  ngOnInit() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)"),
      new Joke("Test 1 What kind of cheese do you use to disguise a small horse", "Mask-a-pony Test 1 "),
      new Joke("Test 2 What kind of cheese do you use to disguise a small horse", "Mask-a-pony Test 2 "),
      new Joke("Test 3 What kind of cheese do you use to disguise a small horse", "Mask-a-pony Test 3 "),
      new Joke("Test 4 What kind of cheese do you use to disguise a small horse", "Mask-a-pony Test 4 ")
    ];
  }

}
