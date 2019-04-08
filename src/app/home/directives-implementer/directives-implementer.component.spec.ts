import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesImplementerComponent } from './directives-implementer.component';

describe('DirectivesImplementerComponent', () => {
  let component: DirectivesImplementerComponent;
  let fixture: ComponentFixture<DirectivesImplementerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesImplementerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesImplementerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
