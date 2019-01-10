import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrakOrAlbumComponent } from './display-trak-or-album.component';

describe('DisplayTrakOrAlbumComponent', () => {
  let component: DisplayTrakOrAlbumComponent;
  let fixture: ComponentFixture<DisplayTrakOrAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTrakOrAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTrakOrAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
