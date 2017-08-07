import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Observable';
import {Composition} from "./composition";

const products = [
  { id: 1, name: 'яблоко', description: 'Что то про яблоко', imagePath: 'https://goo.gl/9qptYP',
    compos: [
      new Composition('Билки', 10),
      new Composition('Жиры', 10),
      new Composition('Углеводы', 10),
      new Composition('Калории', 10)
      ]
  },

  { id: 2, name: 'банан', description: 'Что то про банан', imagePath: 'https://goo.gl/R7CQKF',
    compos: [
      new Composition('Билки', 20),
      new Composition('Жиры', 20),
      new Composition('Углеводы', 20),
      new Composition('Калории', 20)
    ]
  },
  { id: 3, name: 'персик', description: 'Что то про персик', imagePath: 'https://goo.gl/ji3eMD',
    compos: [
      new Composition('Билки', 30),
      new Composition('Жиры', 30),
      new Composition('Углеводы', 30),
      new Composition('Калории', 30)
    ]
  },
  { id: 4, name: 'клубника', description: 'Что то про клубнику', imagePath: 'https://goo.gl/XFzNuG',
    compos: [
      new Composition('Билки', 40),
      new Composition('Жиры', 40),
      new Composition('Углеводы', 40),
      new Composition('Калории', 40)
    ]
  }
];

@Injectable()
export class ProductService {

  id: number = 4;

  getProductAll() {
    return Observable.create(observer => {
      observer.next(products);
    })
  }

  getProduct(id) {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(products.find((product) => product.id == id));
        observer.complete();
      }, 3000);
    });
  }

  addProduct(product: any) {
    let obj = product;
    obj.id = ++this.id;
    console.log(obj);
    products.push(obj);
  }
}
