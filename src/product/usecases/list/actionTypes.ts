import { Product } from "../../domain/entities/product";

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const LOAD_PRODUCTS_SUCCEEDED = 'LOAD_PRODUCTS_SUCCEEDED'
export const LOAD_PRODUCTS_FAILED = 'LOAD_PRODUCTS_FAILED'


export interface LoadProductsAction {
    type: typeof LOAD_PRODUCTS;
}

export interface LoadProductsSucceededAction {
    type: typeof LOAD_PRODUCTS_SUCCEEDED;
    payload: Product[];
}

export interface LoadProductsFailedAction {
    type: typeof LOAD_PRODUCTS_FAILED;
    payload: string;
}


export type LoadProductsActionTypes =
    LoadProductsAction
    | LoadProductsSucceededAction
    | LoadProductsFailedAction
