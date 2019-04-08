// This is child component of 'template' componet
import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css'],
  
})
export class NgTemplateComponent implements OnInit {

  
  isDefulatTemplate = true;
  test:number[] = [1];

  // This templates are defined on parent componet as content child
  @ContentChild('defaultTemplate') templateRef;
  @ContentChild('loading') loadingRef: TemplateRef<any>;
  @ContentChild('loadingMore') loadingMoreRef: TemplateRef<any>;
  @ContentChild('noResults') noResultsRef: TemplateRef<any>; 
  

  constructor() { }


  ngOnInit() {

  }

}
