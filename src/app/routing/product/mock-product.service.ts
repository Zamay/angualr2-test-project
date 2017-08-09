/**
 * Created by Mitya on 08.08.2017.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

// для проверки

@Injectable()
export class MockProductService {
  private productUrl = 'http://596c7d5a47d0840011326ea6.mockapi.io/product/';
  constructor(private http: Http) { }

  getProductAll() {
    return this.http.get(this.productUrl, this.token()).map((response: Response) => response.json());
  }

  getProductById(id: number): any {
    return this.http.get(this.productUrl + id, this.token()).map((response: Response) => response.json());
  }

  createProduct(product: any) {
    return this.http.post(this.productUrl, product, this.token()).map((response: Response) => response.json());
  }

  updateProduct(product: any, id: number) {
    return this.http.put(this.productUrl + id, product, this.token()).map((response: Response) => response.json());
  }

  deleteProduct(id: number) {
    return this.http.delete(this.productUrl + id, this.token()).map((response: Response) => response.json());
  }

  private token() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
