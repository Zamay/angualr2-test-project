import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";
import {MockProductService} from "../mock-product.service";

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
    private mockProductService: MockProductService,
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
    this.mockProductService.deleteProduct(this.id)
      .subscribe(res => console.log(res));

    this.router.navigate(['/product']);
  }

}
