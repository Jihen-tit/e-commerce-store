import { combineReducers } from "redux";
import { loadAllCategoriesReducer } from "@/category/usecases/list/reducer";
import { CategoryState } from "@/category/config/state";
import { setCategoryReducer } from "@/category/usecases/setCategory/reducer";

export const categoryRootReducer = combineReducers<CategoryState>({
    list    : loadAllCategoriesReducer,
    category: setCategoryReducer
})
