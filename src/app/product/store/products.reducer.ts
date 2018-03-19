import { createSelector } from '@ngrx/store';

import * as _ from 'lodash';

import { Product } from '../model/product';
import * as productsActions from './products.actions';

export interface State {
    products: Product[];
    currentProductId?: number;
}

export const INIT_PRODUCTS_STATE: State = {
    products: [
        { id: 1, name: 'Product 1', price: 10.50 },
        { id: 2, name: 'Product 2', price: 11.50 },
        { id: 3, name: 'Product 3', price: 12.50 },
    ],
    currentProductId: undefined
};

export function reducer(state: State = INIT_PRODUCTS_STATE, action: productsActions.All) {
    console.log(action.type, state);

    switch (action.type) {

        case productsActions.SET_CURRENT_PRODUCT_ID: {
            return Object.assign(
                {},
                state,
                { currentProductId: action.payload }
            );
        }

        case productsActions.LOAD_ALL_SUCCESS: {
            return Object.assign(
                {},
                state,
                { productList: action.payload }
            );
        }

        case productsActions.LOAD_SUCCESS: {
            return handleProductLoad(state, action.payload);
        }

        case productsActions.CREATE_SUCCESS: {
            return handleProductCreate(state, action.payload);
        }

        case productsActions.UPDATE_SUCCESS: {
            return handleProductUpdate(state, action.payload);
        }

        case productsActions.DELETE_SUCCESS: {
            return handleProductDelete(state, action.payload);
        }

        default: {
            return state;
        }

    }
}


// Action Handlers (all handlers must be pure functions)
function handleProductLoad(state: State, payload: Product): State {

    const newState = Object.assign({}, state);
    newState.products = _.unionBy([payload], newState.products, 'id');

    return newState;
}

function handleProductCreate(state: State, payload: Product): State {
    const newState = Object.assign({}, state);
    newState.products = _.unionBy([payload], newState.products, 'id');
    return newState;
}


function handleProductUpdate(state: State, payload: Product): State {

    const newState = Object.assign({}, state);
    newState.products = _.unionBy([payload], newState.products, 'id');

    return newState;

}


function handleProductDelete(state: State, payload: number): State {
    const newState = Object.assign({}, state);
    newState.products = newState.products.filter(c => c.id !== payload);
    return newState;
}


// SELECTORS (all selectors must be pure functions)
export const getCurrentProductId = (state: State): number => state.currentProductId;
export const getAllProducts = (state: State): Product[] => state.products;
export const getProductById = (products: Product[], id: number): Product => _.find(products, { id });
export const getCurrentProduct = createSelector(getAllProducts, getCurrentProductId, getProductById);
