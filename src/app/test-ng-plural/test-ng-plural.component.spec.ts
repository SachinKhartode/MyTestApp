import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgPluralComponent } from './test-ng-plural.component';

describe('TestNgPluralComponent', () => {
  let component: TestNgPluralComponent;
  let fixture: ComponentFixture<TestNgPluralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgPluralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgPluralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
