import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterCompanyService } from '../../../services/register-company.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'register-company.component.html'
})
export class RegisterCompanyComponent implements OnInit {
  
  @Input() registerCompany: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, 
              private router: Router,
              private registerCompanyService: RegisterCompanyService) { }

  ngOnInit(){
    this.registerCompany = this.fb.group({
      company_name: ['', Validators.required],
      company_head: ['', Validators.required],
      company_size: ['', Validators.required]
    });
  }

  get f() { return this.registerCompany.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.registerCompany.invalid) { alert('Please fill the form correctly')};

    const company = {
      company_name: this.registerCompany.value.company_name,
      company_head: this.registerCompany.value.company_head,
      company_size: this.registerCompany.value.company_size
    }
  

    this.registerCompanyService.registerCompany(company).subscribe((response) => {
      alert('Registration of '+ response['name'] +  ' was successful');
      this.router.navigate(['/base/home']);
    })

    console.log(company);

  }

  onReset() {
    this.submitted = false;
    this.registerCompany.reset();
  }

}
