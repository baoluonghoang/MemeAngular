import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-dash-board-posts',
  templateUrl: './dash-board-posts.component.html',
  styleUrls: ['./dash-board-posts.component.css']
})
export class DashBoardPostsComponent implements OnInit {
  myLists: any = [];

  constructor(
    private contentService: ContentService
    ) {
    }

  ngOnInit(): void {
    this.getListPost();

  }
  getListPost(): void{
    this.contentService.getAllPost().subscribe((list: any) => {
      this.myLists = list.data;
      console.log(list.data);
    },
    (error) => console.log(error),
    () => console.log("Complete")
    )
  }
}
