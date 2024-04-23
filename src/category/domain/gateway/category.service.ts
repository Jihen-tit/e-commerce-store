import { Observable } from "rxjs";
import { Product } from "@/product/domain/entities/product";

export interface CategoryService {

    getAllCategories(): Observable<string[]>;

}
