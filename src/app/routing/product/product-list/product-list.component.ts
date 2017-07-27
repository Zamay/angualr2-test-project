import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[];

  constructor(private productsService: ProductService) {
  }

  ngOnInit() {
    this.productsService.getContacts().subscribe(data => this.products = (data));
    console.log(this.products);
  }
}
