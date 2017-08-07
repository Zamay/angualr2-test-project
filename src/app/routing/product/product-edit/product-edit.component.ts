import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (product) => {
          this.id = +product['id'];
          this.editMode = product['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let productName = '';
    let productImagePath = '';
    let productDescription = '';
    let productIngredients = new FormArray([]);

    if (this.editMode) {
      console.log('1');
      this.productService.getProduct(this.id).subscribe(obj => {
        this.product = obj;
        productName = this.product.name;
        productImagePath = this.product.imagePath;
        productDescription = this.product.description;

        console.log(this.product.compos);
        for (let ingredient of this.product.compos) {
          console.log(ingredient);
          productIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
          console.log(productIngredients);
        }


        this
          .productForm = new FormGroup({
          'name': new FormControl(productName, Validators.required),
          'imagePath': new FormControl(productImagePath, Validators.required),
          'description': new FormControl(productDescription, Validators.required),
          'composition': productIngredients
        });
      });
    }

  }

  onSubmit() {
    if (this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
  }

  onCancel() {
    this.router.navigate(['/product'], {relativeTo: this.route});
  }

}
