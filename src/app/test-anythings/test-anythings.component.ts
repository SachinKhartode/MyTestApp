import { Component, OnInit } from '@angular/core';
import { IdNumberDirective } from '../directives/access-element.directive';
import { Observable } from 'rxjs/Observable';
import { TestDataServiceService } from '../services/test-data-service.service';

@Component({
  selector: 'app-test-anythings',
  templateUrl: './test-anythings.component.html',
  styleUrls: ['./test-anythings.component.css'],
  providers:[IdNumberDirective]
})

export class TestAnythingsComponent implements OnInit {

  public isFollow: boolean = false;
  ngOnInit() {

  }

  onClick(){
    this.isFollow = !this.isFollow;

  }

}
