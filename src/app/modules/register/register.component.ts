import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onRegister() {
    this.submitted = true;

    //stop here if form is invalid
    if(this.form.invalid) {
      return;
    }

    this.loading = true;
    this.userService.registerAccount(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          alert('Registration successful');
          this.router.navigate(['/login'], { relativeTo: this.route});
        },
        error: error => {
          console.log(error);
          alert('Cannot create account');
          this.loading = false;
        }
      })
  }
}
