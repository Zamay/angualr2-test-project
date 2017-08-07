import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];

    this.route.params.subscribe((params) => {
      this.product = this.route.snapshot.data['product'];
    });

  }
}
