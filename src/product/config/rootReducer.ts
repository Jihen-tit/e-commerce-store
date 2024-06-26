import { combineReducers } from "redux";

import { ProductState } from "@/product/config/state";
import { loadProductsReducer } from "@/product/usecases/list/reducer";
import { loadProductByIdReducer } from "@/product/usecases/details/reducer";
import { addProductToCartReducer } from "@/product/usecases/cart/reducer";

export const productRootReducer = combineReducers<ProductState>({
    list          : loadProductsReducer,
    details       : loadProductByIdReducer,
    productsInCart: addProductToCartReducer
})
