import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board-header',
  templateUrl: './dash-board-header.component.html',
  styleUrls: ['./dash-board-header.component.css']
})
export class DashBoardHeaderComponent implements OnInit {

  @Input() username:string;
  constructor() { }

  ngOnInit(): void {
  }

}
