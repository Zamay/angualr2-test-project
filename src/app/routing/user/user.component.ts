import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { UserService } from 'app/shared/servise/user.service';
import {User} from "../../shared/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: User;
  userForm: FormGroup;
  result: boolean ;
  userResult: any = {
    index: '',
    cal: '',
    height: ''
  };

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    console.log(this.currentUser);
    this.userForm = new FormGroup({

      "userHeight": new FormControl("170", [
        Validators.required,
        Validators.pattern("^[0-9]{3}")
      ]),
      "userWeight": new FormControl("60", [
        Validators.required,
        Validators.pattern("^[0-9]{2,3}")
      ]),
      "userAge": new FormControl("30", [
        Validators.required,
        Validators.pattern("^[0-9]{2}")
      ]),
      "userBirthday": new FormControl("2017-07-07", [
        Validators.required
      ]),
      "userEmail": new FormControl(this.currentUser.email, [
        Validators.required,
        // Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
      ])
    });
  }

  submit() {
    console.log(this.userForm.value);
    this.result = true;
    this.calories()
  }

  calories() {
    let weight = this.userForm.value.userWeight
    let height = this.userForm.value.userHeight;
    let age = this.userForm.value.userAge;
    this.userResult.height = (height - 100) ;
    this.userResult.index = (weight / ((height / 100) * (height / 100))).toFixed(1);
    this.userResult.cal = ((10 * weight + 6.25 * height - 5* age ) * 1.35).toFixed(1);
    let index = this.userResult.index;

    let x = index * 100;
    switch (true) {
      case (x < 1801):
        this.userResult.index = index + " Недостаточен, опасно для здоровья"; break;
      case (x > 1800 && x < 2001):
        this.userResult.index = index + " Слегка снижен, неопасно для здоровья"; break;
      case (x > 1999 && x < 2591):
        this.userResult.index = index + " Нормальный"; break;
      case (x > 2599 && x < 2791):
        this.userResult.index = index + " Излишний"; break;
      case (x > 2799 && x < 3191):
        this.userResult.index = index + " Ожирение 1 степени"; break;
      default:
        this.userResult.index = index + " хрю - хрю"; break;
    }
  }
}
