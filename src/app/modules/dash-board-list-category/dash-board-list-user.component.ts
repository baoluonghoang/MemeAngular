import { Account } from 'src/app/models/users.interface';
import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dash-board-list-user',
  templateUrl: './dash-board-list-user.component.html',
  styleUrls: ['./dash-board-list-user.component.css']
})
export class DashBoardListUserComponent implements OnInit {
  myCategories: any = [];
  accounts: any = [];
  loading = false;

  constructor(
    private contentService: ContentService
    ) {}

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

  getListUser() {
    this.loading = true;
    this.contentService.getAllUser().pipe(first()).subscribe(accounts => {
        this.loading = false;
        this.accounts = accounts;
        console.log(accounts);
    });
  }

}
