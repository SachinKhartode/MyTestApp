import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponent } from './observable.component';
import { TestDataServiceService, Employee } from '../services/test-data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('ObservableComponent', () => {
  let component: ObservableComponent;
  let fixture: ComponentFixture<ObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule,HttpModule],
      declarations: [ ObservableComponent ],
      providers:[TestDataServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', () => {
    expect(component).toBeTruthy();
  });
});
