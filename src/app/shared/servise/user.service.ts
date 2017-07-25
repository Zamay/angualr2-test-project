import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { forEach } from "@angular/router/src/utils/collection";


@Injectable()
export class UserService {
  private userUrl = 'http://596c7d5a47d0840011326ea6.mockapi.io/user/';

  users: any;
  user1: any;
  userOnline: boolean = false;
  constructor(private http: Http) {
    this.getAllUsers();
  }

  getAllUsers() {
    return this.http.get(this.userUrl, this.token()).map((response: Response) => response.json() );
  }

  createUser(user: any) {
    const that = this;
    this.getAllUsers().subscribe(data => {
      data.find(function (val){
        if ( val.email === user.email && val.password === user.password) {
          alert('Такой пользователь уже есть');
          return true
        } else {
          return this.http.post(this.userUrl, user,  this.token()).map((response: Response) => response.json());
        }
      })
    });
  }

  compare(user: any) {
    const that = this;
    this.getAllUsers().subscribe(data => {
      data.find(function (val){
        if ( val.email === user.email && val.password === user.password) {
          that.userOnline = true;
          that.user1 = val;
          return true;
        } else {
          console.log('Проверяю ... ');
        }
      })
    });
  }








  private token() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
