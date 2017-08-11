import {Injectable, Input} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class WeatherTestService {
  public link: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  public appid = '&units=metric&APPID=f8998a426752a5bdc36fb0a159e9f17b';

  constructor(private http: Http) { }

  public getWeatherUser(loc: any): any {
    return this.http.get(this.link + loc.city + ',' + loc.country + this.appid)
      .map(res => res.json())
  }

  // Получить погоду по указанному городу
  public getWeatherCity(city: string) {
    return this.http.get(this.link + city + this.appid)
      .map(res => res.json())
  }

}
