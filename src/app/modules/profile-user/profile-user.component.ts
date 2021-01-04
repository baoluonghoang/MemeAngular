import { AuthenticationService } from 'src/app/services/authentication.service';
import { ContentService } from 'src/app/services/content.service';
import { Account } from 'src/app/models/users.interface';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  loading = false;
  currentUser: Account;
  userFromApi: Account;

  constructor(
    private contentService: ContentService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
   }

  ngOnInit(): void {
    this.loading = true;
    this.contentService.getUserById(this.currentUser.id).pipe(first()).subscribe(account => {
      this.loading = false;
      this.userFromApi = account;
    })
  }

}
