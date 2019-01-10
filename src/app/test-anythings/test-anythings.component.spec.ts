import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnythingsComponent } from './test-anythings.component';

describe('TestAnythingsComponent', () => {
  let component: TestAnythingsComponent;
  let fixture: ComponentFixture<TestAnythingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAnythingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAnythingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
