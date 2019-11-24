import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
 
  user;

  constructor(private loginService: LoginService, 
              private router:Router) { }

  ngOnInit() {
      return this.loginService.getUser().subscribe((data: any[])=>{
        //   console.log(data)
          this.user = data;
      })
      console.log(this.user);
  }
}
