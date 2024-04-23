import { Epic, ofType, StateObservable } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { AppState } from "@/redux-configuration/appState";
import { ProductService } from "@/product/domain/gateway/product.service";
import { LOAD_PRODUCTS, LoadProductsAction } from "@/product/usecases/list/actionTypes";
import { loadProductsFailed, loadProductsSucceeded } from "@/product/usecases/list/actions";

export const loadProductsEpic: Epic = (action$: Observable<LoadProductsAction>,
                                       store: StateObservable<AppState>,
                                       {productService}: { productService: ProductService }) =>
    action$.pipe(
        ofType(LOAD_PRODUCTS),
        switchMap(() => productService.getProducts()
            .pipe(
                map(products => loadProductsSucceeded(products)),
                catchError(error => of(loadProductsFailed(error)))
            )
        )
    )
