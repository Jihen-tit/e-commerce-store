export interface CategoryState {
    list: LoadAllCategoriesState;
    selectedCategory: string;
}

export interface LoadAllCategoriesState {
    loading: boolean;
    data: string[] | undefined;
    error: string | undefined;
}
