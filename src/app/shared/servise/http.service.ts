import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// для проверки

@Injectable()
export class HttpService {
  private userUrl = 'http://596c7d5a47d0840011326ea6.mockapi.io/reqistration';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {  }

  // Получение всех записей
  getData(): Observable<Response> {
    return this.http.get(this.userUrl)
      .map((resp: Response) => resp.json());
  }

  // Получение 1 запись
  getRecord(id: string): Observable<Response> {
    return this.http.get(`${this.userUrl}/${id}`)
  }

  // Добавить 1 запись
  addRecord (body: Object): Observable<Response> {
    return this.http.post(this.userUrl, body, this.options)
      .map((res: Response) => res.json())
  }

  // Удаление
  deleteRecord(id: string): Observable<Response> {
    return this.http.delete(`${this.userUrl}/${id}`)
      .map((res: Response) => res.json())
  }

}
