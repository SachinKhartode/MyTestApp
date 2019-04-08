import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-track',
  templateUrl: './display-track.component.html',
  styleUrls: ['./display-track.component.css']
})
export class DisplayTrackComponent implements OnInit {

  thumbnail : string;
  
  constructor(private route:ActivatedRoute) {

    this.route.params.subscribe(params => this.thumbnail = params.thumbnail);
    
    this.route.parent.params.subscribe(params => console.log(params))
    this.route.params.subscribe(params => console.log(params)); 

   }


  ngOnInit() {
  }

}
