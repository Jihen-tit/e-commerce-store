
import { LoadAllCategoriesState } from "@/category/config/state";
import { LOAD_ALL_CATEGORIES, LOAD_ALL_CATEGORIES_FAILED, LOAD_ALL_CATEGORIES_SUCCEEDED, LoadAllCategoriesActionTypes } from "@/category/usecases/list/actionTypes";

const initialState: LoadAllCategoriesState = {
    loading: false,
    data   : undefined,
    error  : undefined
}

export const loadAllCategoriesReducer = (state = initialState, action: LoadAllCategoriesActionTypes): LoadAllCategoriesState => {
    switch (action.type) {
        case LOAD_ALL_CATEGORIES:
            return {
                loading: true,
                data   : undefined,
                error  : undefined
            }
        case LOAD_ALL_CATEGORIES_FAILED:
            return {
                loading: false,
                data   : undefined,
                error  : action.payload
            }
        case LOAD_ALL_CATEGORIES_SUCCEEDED:
            return {
                loading: false,
                data   : action.payload,
                error  : undefined
            }
        default:
            return state
    }
}
