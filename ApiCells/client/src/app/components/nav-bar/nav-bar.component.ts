import { Router } from '@angular/router';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  public logged: boolean;
  ngOnInit() {
    this.checkLogin();
  }
  
  onLogout(): void{
    this.userService.logoutUser();
  }
  checkLogin():void{
    if(this.userService.getCurrentUser()==null){
      this.logged=false;
    }else{
      this.logged=true;
    }
  }
}
