import { Product } from "@/product/domain/entities/product";

export const LOAD_PRODUCT_BY_ID = 'LOAD_PRODUCT_BY_ID'
export const LOAD_PRODUCT_BY_ID_SUCCEEDED = 'LOAD_PRODUCT_BY_ID_SUCCEEDED'
export const LOAD_PRODUCT_BY_ID_FAILED = 'LOAD_PRODUCT_BY_ID_FAILED'


export interface LoadProductByIdAction {
    type: typeof LOAD_PRODUCT_BY_ID;
    payload: string;
}

export interface LoadProductByIdSucceededAction {
    type: typeof LOAD_PRODUCT_BY_ID_SUCCEEDED;
    payload: Product;
}

export interface LoadProductByIdFailedAction {
    type: typeof LOAD_PRODUCT_BY_ID_FAILED;
    payload: string;
}


export type LoadProductByIdActionTypes =
    LoadProductByIdAction
    | LoadProductByIdSucceededAction
    | LoadProductByIdFailedAction
