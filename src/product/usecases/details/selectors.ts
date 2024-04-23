import { AppState } from "@/redux-configuration/appState";
import { Product } from "@/product/domain/entities/product";

export const loadProductByIdLoadingSelector = (state: AppState): boolean => state.product.details.loading
export const loadProductByIdErrorSelector = (state: AppState): string | undefined => state.product.details.error
export const productDetailsSelector = (state: AppState): Product | undefined => state.product.details.data
