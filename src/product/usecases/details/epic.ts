import { Epic, ofType, StateObservable } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { AppState } from "@/redux-configuration/appState";
import { ProductService } from "@/product/domain/gateway/product.service";
import { LOAD_PRODUCT_BY_ID, LoadProductByIdAction } from "@/product/usecases/details/actionTypes";
import { loadProductByIdFailed, loadProductByIdSucceeded } from "@/product/usecases/details/actions";

export const loadProductByIdEpic: Epic = (action$: Observable<LoadProductByIdAction>,
                                       store: StateObservable<AppState>,
                                       {productService}: { productService: ProductService }) =>
    action$.pipe(
        ofType(LOAD_PRODUCT_BY_ID),
        switchMap((action) => productService.getProductById(action.payload)
            .pipe(
                map(product => loadProductByIdSucceeded(product)),
                catchError(error => of(loadProductByIdFailed(error)))
            )
        )
    )
