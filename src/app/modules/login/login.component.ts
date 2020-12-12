import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  login(){
    const val = this.form.value;

    if(val.username === "" || val.password === "") {
      alert("Bạn chưa đăng nhập tài khoản hoặc mật khẩu !");
    } else if(val.username && val.password){
      this.authService.login(val.username, val.password).subscribe(() => {
        console.log('User is login');
        this.router.navigateByUrl('/dashboard');
      })
    }
  }

}
