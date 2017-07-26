import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { HttpService } from '../../../shared/servise/http.service';
import { UserService } from '../../../shared/servise/user.service';

@Component({
  selector: 'app-left-table',
  templateUrl: './left-table.component.html',
  styleUrls: ['./left-table.component.css']
})
export class LeftTableComponent implements OnInit {

  foodsForm: FormGroup;

  @Output() add = new EventEmitter();

  constructor(
    private httpService: HttpService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {

    console.log(this.userService.currentUser.id);
    this.foodsForm = new FormGroup({

      "userId": new FormControl(this.userService.currentUser.id),
      "name": new FormControl("", [
        Validators.required
      ]),
      "weight": new FormControl("", [
        Validators.required
      ]),
      "roteins": new FormControl("", [
        Validators.required
      ]),
      "fats": new FormControl("", [
        Validators.required
      ]),
      "uglev": new FormControl("", [
        Validators.required
      ]),
      "kKal": new FormControl("", [
        Validators.required
      ])
    });
  }

  onSubmit() {
    this.httpService.create(this.foodsForm.value)
      .subscribe((data) => this.add.emit(data), (error) => error);
    this.foodsForm.reset();
  }
}
