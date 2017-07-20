import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// для проверки

@Injectable()
export class HttpService {
  private userUrl = 'http://5970c13810cdc70011cfc08e.mockapi.io/foot';
  constructor(private http: Http) { }

  getAll() { // наверное не нужен !
    return this.http.get(this.userUrl, this.token()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get(this.userUrl + id, this.token()).map((response: Response) => response.json());
  }

  create(user: any) { // создать пользователя
    return this.http.post(this.userUrl, user, this.token()).map((response: Response) => response.json());
  }

  update(user: any) {
    return this.http.put(this.userUrl + user.id, user, this.token()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(this.userUrl + id, this.token()).map((response: Response) => response.json());
  }

  private token() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
