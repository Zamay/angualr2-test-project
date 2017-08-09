import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from "@angular/router";
import {MockProductService} from "../mock-product.service";
import {ShareableStreamStoreService} from "../shareable-stream-store.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: number;
  editMode = false;
  product: any;
  productForm: FormGroup;

  constructor(
    private mockProductService: MockProductService,
    private route: ActivatedRoute,
    private router: Router,
    private shareableStreamStoreService: ShareableStreamStoreService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((product) => {
          this.id = +product['id'];
          this.editMode = product['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let productName = '';
    let productImageUrl = '';
    let productDescription = '';
    // let productComposition = new FormArray([]);

    if (this.editMode) {
      this.mockProductService.getProductById(this.id).subscribe(res => {
        this.product = res;
        productName = this.product.name;
        productImageUrl = this.product.imageUrl;
        productDescription = this.product.description;

        console.log(this.product);
        // for (let ingredient of this.product.compos) {
        //   console.log(ingredient);
        //   productComposition.push(
        //     new FormGroup({
        //       'name': new FormControl(ingredient.name, Validators.required),
        //       'amount': new FormControl(ingredient.amount, [
        //         Validators.required,
        //         Validators.pattern(/^[1-9]+[0-9]*$/)
        //       ])
        //     })
        //   );
        //   console.log(productComposition);
        // }

        this
          .productForm = new FormGroup({
          'name': new FormControl(productName, Validators.required),
          'imageUrl': new FormControl(productImageUrl, Validators.required),
          'description': new FormControl(productDescription, Validators.required)
          // 'composition': productComposition
        });
      });
    } else {
      this
        .productForm = new FormGroup({
        'name': new FormControl(productName, Validators.required),
        'imageUrl': new FormControl(productImageUrl, Validators.required),
        'description': new FormControl(productDescription, Validators.required)
        // 'composition': productComposition
      });
    }

  }

  onSubmit() {
    if (this.editMode) {
      this.mockProductService.updateProduct(this.id, this.productForm.value);
    } else {
      this.mockProductService.createProduct(this.productForm.value)
        .subscribe((data) => console.log(data), (error) => error);
    }

    // this.shareableStreamStoreService.addProduct(this.productForm.value)
  }

  onCancel() {
    // this.router.navigate(['/product'], {relativeTo: this.route});
  }

}
