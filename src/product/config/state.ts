import { Product } from "@/product/domain/entities/product";

export interface ProductState {
    list: LoadProductsState;
}

export interface LoadProductsState {
    loading: boolean;
    data: Product[] | undefined;
    error: string | undefined;
}
