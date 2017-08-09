import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MockProductService} from "../mock-product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public loader: boolean = false;
  public products: any[];

  constructor(
    private mockProductService: MockProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.mockProductService.getProductAll().subscribe(res => this.products = res)
    // setInterval(() => {this.productsService.getProductAll().subscribe(data => this.products = (data)) } , 5000)
  }

  onNewProduct() {
    // this.router.navigate(['new'])
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
