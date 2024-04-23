import { Product } from "@/product/domain/entities/product";

export interface ProductState {
    list: LoadProductsState;
    details: LoadProductByIdState;
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
