import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  submitted = false;
  @Input() loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) {}

  ngOnInit(): void {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) { return; }

    this.loginService.loginUser(this.loginForm.value).subscribe((response) => {
      let key = 'access_token';
      let value = response['access_token']
      localStorage.setItem(key, value);
      window.alert('Login was Successful' + response.message);
      this.router.navigate(['/base/home']);
    })

    console.log(this.loginForm);
  }
}
