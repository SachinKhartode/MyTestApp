import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingComponent } from './unit-testing.component';
import { equal } from 'assert';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('UnitTestingComponent', () => {
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>;
  let submitEl: DebugElement;
  let myspy : jasmine.Spy;
  let myAddEmployee : jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestingComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestingComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));
    myspy = spyOn<UnitTestingComponent>(component,'ngOnInit');
    myAddEmployee = spyOn<UnitTestingComponent>(component,'AddEmployee');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Setting enabled to false by default for submit button', () => {
    expect(submitEl.attributes.name).toBe("Submit");
  });

  it('NgOnInit tobe defined', () => {
    expect(component).toBeDefined('ngOnInit');
  });

  it('NgOnInit must be called', () => {
    expect(myspy).toHaveBeenCalled();
  });

  it('AddEmployee tobe defined', () => {
    expect(component).toBeDefined('AddEmployee');
  });

  it('AddEmployee must be called on submit button click', () => {

    submitEl.triggerEventHandler('click', null);

    expect(myAddEmployee).toHaveBeenCalled();
  });

});
