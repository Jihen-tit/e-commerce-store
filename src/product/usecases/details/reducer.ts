
import { LoadProductByIdState } from "@/product/config/state";
import { LOAD_PRODUCT_BY_ID, LOAD_PRODUCT_BY_ID_FAILED, LOAD_PRODUCT_BY_ID_SUCCEEDED, LoadProductByIdActionTypes } from "@/product/usecases/details/actionTypes";

const initialState: LoadProductByIdState = {
    loading: false,
    data   : undefined,
    error  : undefined
}

export const loadProductByIdReducer = (state = initialState, action: LoadProductByIdActionTypes): LoadProductByIdState => {
    switch (action.type) {
        case LOAD_PRODUCT_BY_ID:
            return {
                loading: true,
                data   : undefined,
                error  : undefined
            }
        case LOAD_PRODUCT_BY_ID_FAILED:
            return {
                loading: false,
                data   : undefined,
                error  : action.payload
            }
        case LOAD_PRODUCT_BY_ID_SUCCEEDED:
            return {
                loading: false,
                data   : action.payload,
                error  : undefined
            }
        default:
            return state
    }
}
