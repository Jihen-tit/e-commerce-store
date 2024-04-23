import { AppState } from "@/redux-configuration/appState";
import { ProductCart } from "@/product/domain/entities/cart";

export const productsInCartSelector = (state: AppState): ProductCart[] => state.product.productsInCart
