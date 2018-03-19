import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRootStore from '../../store';
import * as fromProducts from './products.reducer';

export interface ProductsState {
    products: fromProducts.State;
}

// This is a lazy loaded state, so we need to extend from the App Root State
export interface State extends fromRootStore.State {
    'products': ProductsState;
}

export const reducers = {
    products: fromProducts.reducer
};

export const getProductsRootState = createFeatureSelector<ProductsState>('products');

export const getProductsState = createSelector(
    getProductsRootState,
    (state: ProductsState) => state.products
);

export const getAllProducts = createSelector(
    getProductsState,
    fromProducts.getAllProducts
);

export const getCurrentProduct = createSelector(
    getProductsState,
    fromProducts.getCurrentProduct
);
