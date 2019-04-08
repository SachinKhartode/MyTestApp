import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMaterialGridComponent } from './ang-material-grid.component';

describe('AngMaterialGridComponent', () => {
  let component: AngMaterialGridComponent;
  let fixture: ComponentFixture<AngMaterialGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngMaterialGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMaterialGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
