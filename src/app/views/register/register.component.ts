import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from '../../_helpers/mustmatch.validators';
import {RegisterService} from '../../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  @Input() registerForm: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company_code: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeat_password: ['', Validators.required]
    }, {
      validators: MustMatch('password', 'repeat_password')
    });

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if ( this.registerForm.invalid) { alert('Please fill the form correctly') }
    
    this.registerService.registerUser(this.registerForm.value).subscribe((response) => {
      let key = 'access_token';
      let value = response['access_token']
      localStorage.setItem(key, value);
      alert('Registration was successful');
      this.router.navigate(['/login']);
    });


    console.log(this.registerForm);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

