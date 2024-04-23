import { Observable } from "rxjs";
import { Product } from "@/product/domain/entities/product";

export interface ProductService {

    getProducts(): Observable<Product[]>;

}
