import { AppState } from "@/redux-configuration/appState";
import { Product } from "@/product/domain/entities/product";

export const loadProductsLoadingSelector = (state: AppState): boolean => state.product.list.loading
export const loadProductsErrorSelector = (state: AppState): string | undefined => state.product.list.error
export const productsSelector = (state: AppState): Product[] | undefined => state.product.list.data
