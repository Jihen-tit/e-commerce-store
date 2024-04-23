import {
    LOAD_ALL_CATEGORIES, LOAD_ALL_CATEGORIES_FAILED, LOAD_ALL_CATEGORIES_SUCCEEDED,
    LoadAllCategoriesAction, LoadAllCategoriesFailedAction, LoadAllCategoriesSucceededAction
} from "@/category/usecases/list/actionTypes";

export const loadAllCategories = (): LoadAllCategoriesAction => ({
    type: LOAD_ALL_CATEGORIES
})

export const loadAllCategoriesSucceeded = (categories: string[]): LoadAllCategoriesSucceededAction => ({
    type   : LOAD_ALL_CATEGORIES_SUCCEEDED,
    payload: categories
})

export const loadAllCategoriesFailed = (error: string): LoadAllCategoriesFailedAction => ({
    type   : LOAD_ALL_CATEGORIES_FAILED,
    payload: error
})
