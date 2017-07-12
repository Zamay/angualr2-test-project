import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({

      "userName": new FormControl("User"),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
      ]),
      "userPass": new FormControl("", [
        Validators.required
      ])
    });
  }

  submit() {
    console.log(this.myForm.value);
  }
}
