import { LoadProductsState } from "@/product/config/state";
import { LOAD_PRODUCTS, LOAD_PRODUCTS_FAILED, LOAD_PRODUCTS_SUCCEEDED, LoadProductsActionTypes } from "@/product/usecases/list/actionTypes";

const initialState: LoadProductsState = {
    loading: false,
    data   : undefined,
    error  : undefined
}

export const loadProductsReducer = (state = initialState, action: LoadProductsActionTypes): LoadProductsState => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                loading: true,
                data   : undefined,
                error  : undefined
            }
        case LOAD_PRODUCTS_FAILED:
            return {
                loading: false,
                data   : undefined,
                error  : action.payload
            }
        case LOAD_PRODUCTS_SUCCEEDED:
            return {
                loading: false,
                data   : action.payload,
                error  : undefined
            }
        default:
            return state
    }
}
