import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent implements OnInit {

  thumbnail : string;
  
  constructor(private route:ActivatedRoute) {

    this.route.params.subscribe(params => this.thumbnail = params.thumbnail);
    
    this.route.parent.params.subscribe(params => console.log(params))
    this.route.params.subscribe(params => console.log(params)); // Object {}

   }


  ngOnInit() {
  }

}
