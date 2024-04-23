import { Observable, throwError } from "rxjs";
import { ajax } from "rxjs/internal/ajax/ajax";
import { catchError, map } from "rxjs/operators";

import { ProductDto } from "@/product/adapters/secondaries/dto/product.dto";
import { ProductMapper } from "@/product/adapters/secondaries/mapper/product.mapper";
import { ProductService } from "@/product/domain/gateway/product.service";
import { Product } from "@/product/domain/entities/product";

export class ApiProductService implements ProductService {

    getProducts(): Observable<Product[]> {
        const url = "https://fakestoreapi.com/products"
        return ajax.getJSON<ProductDto[]>(url)
            .pipe(
                map((response: ProductDto[]) => ProductMapper.mapDataToProducts(response)),
                catchError(err => throwError(err.status.toString()))
            )
    }

}
