import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardSidebarComponent } from './dash-board-sidebar.component';

describe('DashBoardSidebarComponent', () => {
  let component: DashBoardSidebarComponent;
  let fixture: ComponentFixture<DashBoardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
