export const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES'
export const LOAD_ALL_CATEGORIES_SUCCEEDED = 'LOAD_ALL_CATEGORIES_SUCCEEDED'
export const LOAD_ALL_CATEGORIES_FAILED = 'LOAD_ALL_CATEGORIES_FAILED'


export interface LoadAllCategoriesAction {
    type: typeof LOAD_ALL_CATEGORIES;
}

export interface LoadAllCategoriesSucceededAction {
    type: typeof LOAD_ALL_CATEGORIES_SUCCEEDED;
    payload: string[];
}

export interface LoadAllCategoriesFailedAction {
    type: typeof LOAD_ALL_CATEGORIES_FAILED;
    payload: string;
}


export type LoadAllCategoriesActionTypes =
    LoadAllCategoriesAction
    | LoadAllCategoriesSucceededAction
    | LoadAllCategoriesFailedAction
