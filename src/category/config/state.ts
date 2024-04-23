export interface CategoryState {
    list: LoadAllCategoriesState;
    category: string;
}

export interface LoadAllCategoriesState {
    loading: boolean;
    data: string[] | undefined;
    error: string | undefined;
}
