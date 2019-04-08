import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Joke } from '../../../modules/Joke';

@Component({
  selector: 'app-joke-component',
  templateUrl: './joke-component.component.html',
  styleUrls: ['./joke-component.component.css']
})
export class JokeComponentComponent implements OnInit,OnChanges {

  constructor() { }
  @Input('inputJokeProp') data: Joke;

  ngOnInit() {
    
  }

  ngOnChanges(changes:SimpleChanges){
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`Component property ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    
  }
}
