import { Router } from '@angular/router';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService: UserService,private location:Location) { }
  public logged: boolean;
  title='Cellphone Shop';
  ngOnInit() {
    this.checkLogin();
  }
  
  onLogout(): void{
    this.userService.logoutUser();
    location.reload();
  }
  checkLogin():void{
    if(this.userService.getCurrentUser()==null){
      this.logged=false;
    }else{
      this.logged=true;
    }
  }
}
