import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardHeaderComponent } from 'src/app/modules/dash-board-header/dash-board-header.component';
import { DashBoardListUserComponent } from 'src/app/modules/dash-board-list-category/dash-board-list-user.component';
import { DashBoardPostsComponent } from 'src/app/modules/dash-board-posts/dash-board-posts.component';
import { DashBoardSidebarComponent } from 'src/app/modules/dash-board-sidebar/dash-board-sidebar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashBoardComponent } from './dash-board.component';


@NgModule({
  declarations: [
    DashBoardHeaderComponent,
    DashBoardListUserComponent,
    DashBoardPostsComponent,
    DashBoardSidebarComponent,
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class DashBoardModule { }
