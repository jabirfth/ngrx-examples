import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import * as fromProducts from '../store';
import * as productsActions from '../store/products.actions';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.css']
})
export class IndexProductComponent implements OnInit {
  products$: Observable<Product[]>;

  product$: Observable<Product>;

  constructor(public store: Store<fromProducts.State>) { }

  ngOnInit() {
    this.products$ = this.store.select(fromProducts.getAllProducts);
    this.product$ = this.store.select(fromProducts.getCurrentProduct);
  }

  onEdit(pId: number) {
    this.store.dispatch(new productsActions.SetCurrentProductId(pId));
  }

  onDelete(pId: number) {
    const r = confirm('Are you sure ?');
    if (r) {
      this.store.dispatch(new productsActions.Delete(pId));
    }
  }

  onSubmit(p: Product) {
    if (!!p.id) {
      // update
      this.store.dispatch(new productsActions.Update(p));
    } else {
      // create
      this.store.dispatch(new productsActions.Create(p));
    }
  }

}
