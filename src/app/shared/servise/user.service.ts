import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import {User} from "../user";
import {Router} from "@angular/router";


@Injectable()
export class UserService {
  private userUrl = 'http://596c7d5a47d0840011326ea6.mockapi.io/user/';

  public currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
  public isLoggedIn: boolean = JSON.parse(localStorage.getItem('currentUser'));
  private users: any;

  constructor(
    private http: Http,
    private router: Router,
  ) {
    this.getAllUsers();
    console.log(this.users);
  }

  getAllUsers() {
    return this.http.get(this.userUrl, this.token())
      .map((response: Response) => response.json() )
      .subscribe(data => this.users = data);
  }

  // проверка на наличие пользователя при регистрации
  createUser(user: any) {
    if (!this.users) {
      this.create(user);
    } else {
      this.users.find((val) => {
        if ( val.email === user.email && val.password === user.password) {
          alert('Такой пользователь уже есть');
          return false
        } else {
          this.create(user);
          return true;
        }
      })
    }
  }

  // создать пользователя
  create(user) {
    this
      .http.post(this.userUrl, user,  this.token())
      .map((response: Response) => response.json())
      .subscribe(data => {
        this.setToLocalStorage(data);
        this.isLoggedIn = true;
        console.log('req');
        this.router.navigate(['/user']);
      });
  }

  // проверка на наличие пользователя при авторизации
  login(user: any) {
    const that = this;
    this.users.find((val) => {
      if ( val.email === user.email && val.password === user.password) {
          this.setToLocalStorage(val);
          that.isLoggedIn = true;
          console.log('log');
          this.router.navigate(['/user']);
          return true;
        } else {
          console.log('Проверяю ... ');
          return false;
        }
      })
  }

  // public static get isLoggedIn(): boolean {
  //   return Boolean(localStorage.getItem('currentUser'));
  // }

  public setToLocalStorage(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
  }





  private token() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}