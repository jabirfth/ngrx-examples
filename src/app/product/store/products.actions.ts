import { Action } from '@ngrx/store';

import { Product } from '../model/product';

export const LOAD_ALL = '[Products] LOAD ALL';
export const LOAD_ALL_SUCCESS = '[Products] LOAD ALL SUCCESS';

export const LOAD = '[Products] LOAD';
export const LOAD_SUCCESS = '[Products] LOAD SUCCESS';

export const CREATE = '[Products] CREATE';
export const CREATE_SUCCESS = '[Products] CREATE SUCCESS';

export const UPDATE = '[Products] UPDATE';
export const UPDATE_SUCCESS = '[Products] UPDATE SUCCESS';

export const DELETE = '[Products] DELETE';
export const DELETE_SUCCESS = '[Products] DELETE SUCCESS';

export const SET_CURRENT_PRODUCT_ID = '[Products] SET CURRENT PRODUCT ID';

export class SetCurrentProductId implements Action {
    readonly type = SET_CURRENT_PRODUCT_ID;
    constructor(public payload?: number) { }
}

export class LoadAll implements Action {
    readonly type = LOAD_ALL;
}

export class Load implements Action {
    readonly type = LOAD;
    constructor(public payload?: number) { }
}

export class Create implements Action {
    readonly type = CREATE;
    constructor(public payload?: Product) { }
}


export class Update implements Action {
    readonly type = UPDATE;
    constructor(public payload?: Product) { }
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public payload?: number) { }
}

export class LoadAllSuccess implements Action {
    readonly type = LOAD_ALL_SUCCESS;
    constructor(public payload?: Product[]) { }
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload?: Product) { }
}

export class CreateSuccess implements Action {
    readonly type = CREATE_SUCCESS;
    constructor(public payload?: Product) { }
}

export class UpdateSuccess implements Action {
    readonly type = UPDATE_SUCCESS;
    constructor(public payload?: Product) { }
}

export class DeleteSuccess implements Action {
    readonly type = DELETE_SUCCESS;
    constructor(public payload?: number) { }
}

export type All =
    | SetCurrentProductId
    | LoadAll
    | Load
    | Create
    | Update
    | Delete
    | LoadAllSuccess
    | LoadSuccess
    | UpdateSuccess
    | CreateSuccess
    | DeleteSuccess;
