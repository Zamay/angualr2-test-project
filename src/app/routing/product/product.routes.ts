import {Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductResolve} from './product.resolve';
import {ProductEditComponent} from "./product-edit/product-edit.component";


export const ProductRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      // { path: '', component: ProductListComponent },
      { path: 'new', component: ProductEditComponent },
      { path: ':id', component: ProductDetailComponent, resolve: { product: ProductResolve } },
    ]

  }
];
