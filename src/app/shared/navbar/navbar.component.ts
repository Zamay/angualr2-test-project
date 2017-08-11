import {Component, OnInit} from '@angular/core';
import { WeatherTestService } from '../servise/weather-test.service';
import { FormControl, FormGroup } from '@angular/forms';
import {LocationTestService} from "../servise/location-test.service";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loader: boolean = false;
  public weather: any;
  public temp: any;
  public cityForm: FormGroup;
  public errors: boolean = false;
  constructor(private weatherServ: WeatherTestService,
              private locationServ: LocationTestService) {

    this.cityForm = new FormGroup({
      'city': new FormControl('')
    });
  }

  onSubmit() {
    this.weatherServ.getWeatherCity(this.cityForm.value.city).subscribe(
      data => {this.errors = false; this.weather = data; console.log(data)},
      error => {this.errors = true; console.log(error)}
      );
    this.cityForm.reset()
  }

  ngOnInit() {
    this.loader = true;
    // Таймер для вида
    setTimeout(() => {
    this.locationServ.getLocationUser().subscribe(
      loc => {
        console.log(loc);
        this.weatherServ.getWeatherUser(loc).subscribe(
              data => {
                  console.log(data);
                  this.loader = false;
                  this.weather = data;
                  this.temp = Math.round(this.weather.main.temp);

                },
              err => {this.loader = false; console.log('Error in getting the weather', err)}
          ) },

      err => {this.loader = false; console.log('Error in getting the location', err)} );

    }, 5000)
  }

}
