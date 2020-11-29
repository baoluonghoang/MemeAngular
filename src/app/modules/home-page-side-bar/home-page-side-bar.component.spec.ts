import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSideBarComponent } from './home-page-side-bar.component';

describe('HomePageSideBarComponent', () => {
  let component: HomePageSideBarComponent;
  let fixture: ComponentFixture<HomePageSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
