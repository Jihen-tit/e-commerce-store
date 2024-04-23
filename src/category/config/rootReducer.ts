import { combineReducers } from "redux";
import { loadAllCategoriesReducer } from "@/category/usecases/list/reducer";
import { CategoryState } from "@/category/config/state";

export const categoryRootReducer = combineReducers<CategoryState>({
    list: loadAllCategoriesReducer
})
