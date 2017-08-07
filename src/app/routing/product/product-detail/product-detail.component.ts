import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];

    this.route.params.subscribe((params) => {
      this.product = this.route.snapshot.data['product'];
    });

    this.id = this.product.id;
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete() {
    this.productService.deleteProduct(this.id)
    this.router.navigate(['/product']);
  }
}
