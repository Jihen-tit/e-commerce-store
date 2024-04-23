import {
    LOAD_PRODUCTS, LOAD_PRODUCTS_FAILED, LOAD_PRODUCTS_SUCCEEDED,
    LoadProductsAction, LoadProductsFailedAction, LoadProductsSucceededAction
} from "@/product/usecases/list/actionTypes";
import { Product } from "@/product/domain/entities/product";

export const loadProducts = (): LoadProductsAction => ({
    type: LOAD_PRODUCTS
})

export const loadProductsSucceeded = (products: Product[]): LoadProductsSucceededAction => ({
    type   : LOAD_PRODUCTS_SUCCEEDED,
    payload: products
})

export const loadProductsFailed = (error: string): LoadProductsFailedAction => ({
    type   : LOAD_PRODUCTS_FAILED,
    payload: error
})
