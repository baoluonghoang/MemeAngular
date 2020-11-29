import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardPostsComponent } from './dash-board-posts.component';

describe('DashBoardPostsComponent', () => {
  let component: DashBoardPostsComponent;
  let fixture: ComponentFixture<DashBoardPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
