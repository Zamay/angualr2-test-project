import {Injectable, Input} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class LocationTestService {

  constructor(private http: Http) { }

  public getLocationUser(): any {
    return this.http.get("https://ipinfo.io").map(location => location.json())
  }
}
