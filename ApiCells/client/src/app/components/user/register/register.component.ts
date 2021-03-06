import { Router } from '@angular/router';
import { UserService } from './../../../service/user.service';
import { userInterface } from './../../../interface/user-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService : UserService, private router: Router) { }
  private user: userInterface={
    name:'',
    email:'',
    password:''
  };

  onRegister(): void{
    this.userService.registerUser(
      this.user.name,
      this.user.email,
      this.user.password
    ).subscribe(user => {
      this.userService.setUser(user);
      let token = user.id;
      this.userService.setToken(token);
      this.router.navigate(['/']);
    })
  }

}
