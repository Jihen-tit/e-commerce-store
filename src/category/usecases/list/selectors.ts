import { AppState } from "@/redux-configuration/appState";

export const loadAllCategoriesLoadingSelector = (state: AppState): boolean => state.category.list.loading
export const loadAllCategoriesErrorSelector = (state: AppState): string | undefined => state.category.list.error
export const allCategoriesSelector = (state: AppState): string[] | undefined => state.category.list.data
