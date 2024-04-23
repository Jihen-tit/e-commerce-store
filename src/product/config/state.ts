import { Product } from "@/product/domain/entities/product";
import { ProductCart } from "@/product/domain/entities/cart";

export interface ProductState {
    list: LoadProductsState;
    details: LoadProductByIdState;
    productsInCart: ProductCart[];
}

export interface LoadProductsState {
    loading: boolean;
    data: Product[] | undefined;
    error: string | undefined;
}

export interface LoadProductByIdState {
    loading: boolean;
    data: Product | undefined;
    error: string | undefined;
}
