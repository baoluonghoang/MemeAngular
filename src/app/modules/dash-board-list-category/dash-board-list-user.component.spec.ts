import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardListUserComponent } from './dash-board-list-user.component';

describe('DashBoardListUserComponent', () => {
  let component: DashBoardListUserComponent;
  let fixture: ComponentFixture<DashBoardListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
