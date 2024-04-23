import { AppState } from "@/redux-configuration/appState";
import { ProductCart } from "@/product/domain/entities/cart";

export const selectedProductsSelector = (state: AppState): ProductCart[] => state.product.selectedProducts
