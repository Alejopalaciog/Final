import { Router } from '@angular/router';
import { UserService } from './../../../service/user.service';
import { ApiService } from './../../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { userInterface } from 'src/app/interface/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  private user: userInterface = {
    email:"",
    password:""
  }
  ngOnInit() {
  }
  onLogin(){
    return  this.userService.loginUser(this.user.email, this.user.password)
    .subscribe(data => {
      this.userService.setUser(data.user);
      let token = data.id;
      this.userService.setToken(token);
      this.router.navigate(["/"]);
    },
    failed => console.log(failed)
    )
  }

}
