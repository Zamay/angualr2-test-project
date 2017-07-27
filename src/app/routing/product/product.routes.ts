import { Routes } from '@angular/router';
import {ProductComponent} from "./product.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";


export const ProductRoutes: Routes = [

    {
      path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent},
    ]
    }

  // {
  //   path: 'product',
  //   component: ProductComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: ProductListComponent,
  //     },
  //     {
  //       path: 'product/:id',
  //       component: ProductDetailComponent,
  //       resolve: {
  //         product: ProductResolve
  //       }
  //     }
  //   ]
  //
  // }
];
