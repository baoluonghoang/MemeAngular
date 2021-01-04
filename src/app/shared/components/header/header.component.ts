import { User } from 'src/app/models/post.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Account } from 'src/app/models/users.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: Account;
  loading = false;

  constructor(
    private contentService: ContentService,
    private authenticationService: AuthenticationService,
    private router: Router
    ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit(): void {
    this.loading = true;
    this.contentService.getAllUser().pipe(first()).subscribe((data: any) => {
      this.loading = false;
      this.currentUser = data.data;
      console.log(data.data);

    });
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role.role;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate[('/login')];
  }

}
