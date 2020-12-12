import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.getListPost();
  }

  getListPost() {
    const id = this.route.snapshot.params['id'];
    this.contentService.getPost(id).subscribe((data:any) => {
      this.data = data.data;
      console.log(data.data);
    });
  }
}
