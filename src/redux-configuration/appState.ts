import { ProductState } from "@/product/config/state";
import { CategoryState } from "@/category/config/state";

export interface AppState {
    product: ProductState
    category: CategoryState
}
