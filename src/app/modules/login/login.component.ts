import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {

    // redirect to home if already logged in
    if(this.authService.currentUserValue) {
      this.router.navigate(['/homePage']);
    }
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        }
      ),
      (error:any) => {
        this.error = error;
        this.loading = false;
      }
  }
  // login(){
  //   const val = this.form.value;

  //   if(val.username === "" || val.password === "") {
  //     alert("Bạn chưa đăng nhập tài khoản hoặc mật khẩu !");
  //   } else if(val.username && val.password){
  //     this.authService.login(val.username, val.password).subscribe(() => {
  //       console.log('User is login');
  //       this.router.navigateByUrl('/dashboard');
  //     })
  //   }
  // }

}
