import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeComponentComponent } from './joke-component.component';

describe('JokeComponentComponent', () => {
  let component: JokeComponentComponent;
  let fixture: ComponentFixture<JokeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
