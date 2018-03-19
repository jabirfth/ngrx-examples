import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import * as productsActions from './products.actions';

@Injectable()
export class ProductsEffects {

    @Effect()
    loadAll$: Observable<Action> = this.actions$
        .ofType(productsActions.LOAD_ALL)
        .do(() => new productsActions.LoadAll())
        .switchMap(() =>
            this.productService.listProducts()
                .map((products: Product[]) => new productsActions.LoadAllSuccess(products))
        );

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(productsActions.LOAD)
        .map((action: productsActions.Load) => action.payload)
        .switchMap((id) =>
            this.productService.getProduct(id)
                .mergeMap((product: Product) => {
                    return [
                        new productsActions.LoadSuccess(product),
                        new productsActions.SetCurrentProductId(product.id)
                    ];
                })
        );

    @Effect()
    create$: Observable<Action> = this.actions$
        .ofType(productsActions.CREATE)
        .map((action: productsActions.Create) => action.payload)
        .switchMap((product) =>
            this.productService.createProduct(product)
                .map((createdProduct: Product) => new productsActions.CreateSuccess(createdProduct))
        );

    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(productsActions.UPDATE)
        .map((action: productsActions.Update) => action.payload)
        .switchMap((product) =>
            this.productService.updateProduct(product)
                .map((updatedProduct: Product) => new productsActions.UpdateSuccess(updatedProduct))
        );


    @Effect()
    destroy$: Observable<Action> = this.actions$
        .ofType(productsActions.DELETE)
        .map((action: productsActions.Delete) => action.payload)
        .switchMap((id) =>
            this.productService.deleteProduct(id)
                .map(() => new productsActions.DeleteSuccess(id))
        );

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }


}
