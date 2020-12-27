import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-board-list-user',
  templateUrl: './dash-board-list-user.component.html',
  styleUrls: ['./dash-board-list-user.component.css']
})
export class DashBoardListUserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser() {
    this.userService.getAll().subscribe((data: any) => {
      console.log('hello', data.data);
    })
  }

}
