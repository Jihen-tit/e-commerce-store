import { AppState } from "@/redux-configuration/appState";

export const categorySelector = (state: AppState): string => state.category.selectedCategory
