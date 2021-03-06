import {Component, OnInit} from '@angular/core';
import { WeatherTestService } from '../servise/weather-test.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public weather: any;
  cityForm: FormGroup;
  errors: any;
  constructor(private weatherServ: WeatherTestService) {

    this.cityForm = new FormGroup({
      'city': new FormControl('')
    });
  }

  onSubmit() {
    this.weatherServ.getCity(this.cityForm.value.city).subscribe(
      data => {this.errors = false; this.weather = data; console.log(data)},
      error => {this.errors = true; console.log(error)}
      );
  }

  ngOnInit() {
    setTimeout(() => this.weather = this.weatherServ.test(), 3000)
  }

}
