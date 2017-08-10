import {Injectable, Input} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class WeatherTestService {
  public link: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  public appid = '&units=metric&APPID=f8998a426752a5bdc36fb0a159e9f17b';
  public weather: any;

  constructor(private http: Http) {
    this.get()
  }

  public get(): any {
    // получить местонахождение
    return this.http.get("https://ipinfo.io").map(location => location.json()).subscribe((loc) => {
      // Получить погоду
      this.http.get(this.link + loc.city + ',' + loc.country + this.appid)
        .map(res => res.json())
        .subscribe(
          data => { console.log(data); this.weather = data;  return data;},
          err => { console.log('Something went wrong!'); }
        )
    })
  }
  // Получить погоду по указанному городу
  public getCity(city: string) {
    return this.http.get(this.link + city + this.appid)
      .map(res => res.json())
  }

  test() {
    return this.weather;
  }
}
