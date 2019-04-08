import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionTemplateComponent } from './content-projection-template.component';

describe('ContentProjectionTemplateComponent', () => {
  let component: ContentProjectionTemplateComponent;
  let fixture: ComponentFixture<ContentProjectionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProjectionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
