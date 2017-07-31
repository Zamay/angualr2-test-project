import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: number;
  editMode = false;
  productForm: FormGroup;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    let productName = '';
    let productImagePath = '';
    let productDescription = '';
    let productIngredients = new FormArray([]);

    // if (this.editMode) {
    //   const recipe = this.productService.getProduct(this.id);
    //   productName = recipe.name;
    //   productImagePath = recipe.imagePath;
    //   productDescription = recipe.description;
    //   if (recipe['ingredients']) {
    //     for (let ingredient of recipe.ingredients) {
    //       productIngredients.push(
    //         new FormGroup({
    //           'name': new FormControl(ingredient.name, Validators.required),
    //           'amount': new FormControl(ingredient.amount, [
    //             Validators.required,
    //             Validators.pattern(/^[1-9]+[0-9]*$/)
    //           ])
    //         })
    //       );
    //     }
    //   }
    // }

    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'imagePath': new FormControl(productImagePath, Validators.required),
      'description': new FormControl(productDescription, Validators.required),
      'composition': productIngredients
    });
  }
}
