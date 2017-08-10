import {Injectable, Input} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class WeatherTestService {
  // public location: any;
  public link: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  public appid = '&units=metric&APPID=f8998a426752a5bdc36fb0a159e9f17b';
  public weather: any;

  constructor(private http: Http) {
    this.get()
  }

  public get(): any {
    // получить местонахождение
    return this.http.get("https://ipinfo.io").map(location => location.json()).subscribe((data) => {
      let location = data;
      // Получить погоду
      this.http.get(this.link + location.city + ',' + location.country + this.appid)
        .subscribe(res => {res.json(); console.log(res.json()); this.weather = res.json()})
    })
  }
  // Получить погоду по указанному городу
  public getCity(city: string) {
    return this.http.get(this.link + city + this.appid)
      .map(res => res.json())
  }

  test() {
    this.weather;
  }
}
