import {Injectable, Input} from '@angular/core';
import {BehaviorSubject}    from 'rxjs/BehaviorSubject';
import {MockProductService} from './mock-product.service';
import {Observable}         from "rxjs/Observable";
import {Subject}            from "rxjs/Subject";
import {isNull} from "util";

@Injectable()
export class ShareableStreamStoreService {
  private _myProperty: any = new Subject();

  public set myProperty(value) {
    this._myProperty = value;
  }
  public get myProperty() {
    return this._myProperty;
  }

  public streams: Object = {};

  getStream () {
    if ( isNull(this.streams['uniq_key']) ) {
      this.streams['uniq_key'] = new Subject();
    }

    return this.streams['uniq_key']
  }


  emit(key, value) {
    this.getStream().next(value)
  }




}


// public getSubject(streamId) {
//   if (this._streams[streamId]) {
//     return this._streams[streamId].subscribe(arr => console.log(arr));
//   } else {
//     this._streams[streamId] = new Subject();
//     return this._streams[streamId].subscribe(arr => console.log(arr));
//   }
// }


























  // private _products: BehaviorSubject<any> = new BehaviorSubject(Array([]));
  //
  // constructor(private mockProductService: MockProductService) {
  //   this.loadInitialData();
  // }
  //
  // loadInitialData(): any {
  //   this.mockProductService.getProductAll()
  //     .subscribe(
  //       res => {
  //         let product = res.map((data: any) => Array(data));
  //         this._products.next(product);
  //       },
  //       err => console.log('Error')
  //     );
  // }
  //
  // addProduct(newProduct: any): any {
  //
  //   let obs = this.mockProductService.createProduct(newProduct);
  //
  //   obs.subscribe(
  //     res => {
  //       this._products.next(this._products.getValue().push(newProduct));
  //     });
  //
  //   return obs;
  // }
  //
  // deleteProduct(id: any): any {
  //   let obs = this.mockProductService.deleteProduct(id);
  //
  //   obs.subscribe(
  //     res => {
  //       let product: any = this._products.getValue();
  //       let index = product.findIndex((res) => res.id === id.id);
  //
  //       console.log(res);
  //       console.log(product);
  //       console.log(index);
  //
  //       this._products.next(product.delete(index));
  //
  //     }
  //   );
  //
  //   return obs;
  // }

