import { combineReducers } from "redux";
import { ProductState } from "@/product/config/state";
import { loadProductsReducer } from "@/product/usecases/list/reducer";

export const productRootReducer = combineReducers<ProductState>({
    list: loadProductsReducer
})
