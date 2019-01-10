import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorDecoratorComponent } from './constructor-decorator.component';

describe('ConstructorDecoratorComponent', () => {
  let component: ConstructorDecoratorComponent;
  let fixture: ComponentFixture<ConstructorDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
