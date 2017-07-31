import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  loader: boolean = false;
  products: any[];

  constructor(
    private productsService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.productsService.getProductAll().subscribe(data => this.products = (data));
    console.log(this.products);
  }

  onNewProduct() {
    // this.router.navigate(['new'])
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
