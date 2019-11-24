import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';


@Component({
  templateUrl: 'join-company.component.html'
})
export class JoinCompanyComponent implements OnInit {

    companies = [];
    @Input() joinCompanyForm: FormGroup;

    constructor(private loginService: LoginService,
                private router: Router,
                private fb: FormBuilder){

    }
    ngOnInit(){
        this.joinCompanyForm = this.fb.group({
            company_code: ['', Validators.required]
        });
        return this.loginService.companies().subscribe((data: any)=>{
            // console.log(data);
            this.companies = data;
            console.log(this.companies);
        });
    }
    onSubmit(){
        this.loginService.joinCompany(this.joinCompanyForm.value).subscribe((response)=> {
            window.alert(response.message);
            this.router.navigate(['/base/home']);
        })
    }
    
}
