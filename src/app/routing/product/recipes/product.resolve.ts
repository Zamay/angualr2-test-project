/**
 * Created by Mitya on 27.07.2017.
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../product.service';
import { RecipeService } from "app/routing/product/recipes/recipe.service";

@Injectable()
export class ProductResolve implements Resolve<any> {

  constructor(private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.recipeService.getRecipe(route.params['id']);
  }
}
