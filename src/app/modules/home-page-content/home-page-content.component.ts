import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent implements OnInit {
  // myLists: any = [];
  constructor(private myListPost: ContentService) { }

  ngOnInit(): void {
    // this.getList();
  }

  // getList(){
  //   this.myListPost.getAll().subscribe(data => {
  //     this.myLists = data;
  //   })
  // }

}
