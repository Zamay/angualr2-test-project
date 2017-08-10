import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MockProductService}     from "../mock-product.service";
import {ShareableStreamStoreService} from "../shareable-stream-store.service";
import {WeatherTestService} from "../../../shared/servise/weather-test.service";

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
    private route: ActivatedRoute,
    private shareableStreamStoreService: ShareableStreamStoreService
  ) {
  }

  ngOnInit() {
    this.mockProductService.getProductAll().subscribe(res => this.products = res);


    this.shareableStreamStoreService.getStream('test').asObservable().subscribe(value => console.log(value));
  }

  onNewProduct() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
