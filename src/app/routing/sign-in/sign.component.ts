import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { UserService } from "../../shared/servise/user.service";

@Component({
  selector: 'app-sign',
  templateUrl: 'sign.component.html',
  styleUrls: ['sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  // Переключение на jquery
  signUp_2() {
    $(".message").css("transform", "translateX(100%)");
    if ($(".message").hasClass("login")) {
      $(".message").removeClass("login");
    }
    $(".message").addClass("signup");
  }

  login_2(){
    $(".message").css("transform", "translateX(0)");
    if ($(".message").hasClass("login")) {
      $(".message").removeClass("signup");
    }
    $(".message").addClass("login");
  }

  click() {
    this.userService.logout();
  }
}
