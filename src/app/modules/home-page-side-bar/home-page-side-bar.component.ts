import { ContentService } from 'src/app/services/content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-side-bar',
  templateUrl: './home-page-side-bar.component.html',
  styleUrls: ['./home-page-side-bar.component.css']
})
export class HomePageSideBarComponent implements OnInit {
  myCategories: any = [];
  constructor(
    private contentService: ContentService
    ) {
    }

  ngOnInit(): void {
    this.getLisCategories();

  }

  getLisCategories(): void{
    this.contentService.getAllCategory().subscribe((category: any) => {
      this.myCategories = category.data;
      console.log(category.data);
    },
    (error) => console.log(error),
    () => console.log("Complete")
    )
  }
}
