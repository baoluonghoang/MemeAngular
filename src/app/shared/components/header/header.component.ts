import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/post.interface';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: Account;

  loading = false;
  accounts: Account[];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
    ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe((data: any) => {
      this.loading = false;
      this.currentUser = data.data;
      console.log(data.data);

    });

    // this.userService.getAll().subscribe((data: any) => {
    //   this.loading = false;
    //   this.currentUser = data;
    //   console.log('Hello:', data);
    // })

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate[('/login')];
  }
}
