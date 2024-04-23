import { Observable, throwError } from "rxjs";
import { ajax } from "rxjs/internal/ajax/ajax";
import { catchError, map } from "rxjs/operators";

import { CategoryService } from "@/category/domain/gateway/category.service";

export class ApiCategoryService implements CategoryService {

    getAllCategories(): Observable<string[]> {
        const url = "https://fakestoreapi.com/products/categories"
        return ajax.getJSON<string[]>(url)
            .pipe(
                map((response: string[]) => response),
                catchError(err => throwError(err.status.toString()))
            )
    }

}
