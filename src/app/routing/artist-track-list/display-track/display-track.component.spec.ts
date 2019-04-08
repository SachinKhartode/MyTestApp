import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrackComponent } from './display-track.component';

describe('DisplayTrackComponent', () => {
  let component: DisplayTrackComponent;
  let fixture: ComponentFixture<DisplayTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
