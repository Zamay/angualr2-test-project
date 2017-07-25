import { Component, OnInit } from '@angular/core';

import {UserService} from "../../shared/servise/user.service";
import {HttpService} from "../../shared/servise/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user1: any = {
    email: 'email_name2@gmail.com',
    password: 'password2'
  };

  constructor(private userService: UserService) {
    this.userService.compare(this.user1);
  }

}
