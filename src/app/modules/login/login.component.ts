import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(
    private router: Router
  ) {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }
  ngOnInit(): void {
  }

  login(){
    const val = this.form.value;

    if(val.username == null || val.password == null) {
      alert('Vui lòng nhập tài khoản và mật khẩu !!!');
    }else if(val.username == "admin" && val.password == "123456"){
      this.router.navigateByUrl("/dashboard");
    }else{
      alert('Bạn nhập sai, mời nhập lại !!!');
      this.router.navigateByUrl("/login");
    }

  }

}
