import { combineReducers } from 'redux';

import { AppState } from "@/redux-configuration/appState";
import { productRootReducer } from "@/product/config/rootReducer";
import { categoryRootReducer } from "@/category/config/rootReducer";

export const appRootReducer = combineReducers<AppState>({
    product : productRootReducer,
    category: categoryRootReducer
})
