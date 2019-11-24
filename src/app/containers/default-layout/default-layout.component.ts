import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {
  user:any;
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(private loginService: LoginService, 
              private router: Router,
              @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit() {
    // return this.loginService.getUser().subscribe((data: any)=>{
    //   this.user = data;
    // });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  logout(){
    return this.loginService.logout().subscribe(()=> {
      localStorage.removeItem('access_token');
      this.router.navigateByUrl('/login');
      
    });
    
  }
}
