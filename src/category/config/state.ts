export interface CategoryState {
    list: LoadAllCategoriesState;
}

export interface LoadAllCategoriesState {
    loading: boolean;
    data: string[] | undefined;
    error: string | undefined;
}
