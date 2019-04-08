import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSlidebarComponent } from './menu-slidebar.component';

describe('MenuSlidebarComponent', () => {
  let component: MenuSlidebarComponent;
  let fixture: ComponentFixture<MenuSlidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSlidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
