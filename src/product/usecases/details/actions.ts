import {
    LOAD_PRODUCT_BY_ID, LOAD_PRODUCT_BY_ID_FAILED, LOAD_PRODUCT_BY_ID_SUCCEEDED,
    LoadProductByIdAction, LoadProductByIdFailedAction, LoadProductByIdSucceededAction
} from "@/product/usecases/details/actionTypes";
import { Product } from "@/product/domain/entities/product";

export const loadProductById = (productId: string): LoadProductByIdAction => ({
    type: LOAD_PRODUCT_BY_ID,
    payload: productId
})

export const loadProductByIdSucceeded = (product: Product): LoadProductByIdSucceededAction => ({
    type   : LOAD_PRODUCT_BY_ID_SUCCEEDED,
    payload: product
})

export const loadProductByIdFailed = (error: string): LoadProductByIdFailedAction => ({
    type   : LOAD_PRODUCT_BY_ID_FAILED,
    payload: error
})
