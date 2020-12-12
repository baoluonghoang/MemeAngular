import { Post } from 'src/app/models/post.interface';
import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent implements OnInit {
  myLists: any = [];

  constructor(private contentService: ContentService) { }

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
