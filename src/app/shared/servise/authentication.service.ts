import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(user: any) {
    return this.http.get('http://596c7d5a47d0840011326ea6.mockapi.io/reqistration', JSON.stringify({ user }))
      .map((response: Response) => {
        console.dir(user);
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
