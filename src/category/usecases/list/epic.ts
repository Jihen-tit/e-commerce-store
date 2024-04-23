import { Epic, ofType, StateObservable } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { AppState } from "@/redux-configuration/appState";
import { LOAD_ALL_CATEGORIES, LoadAllCategoriesAction } from "@/category/usecases/list/actionTypes";
import { loadAllCategoriesFailed, loadAllCategoriesSucceeded } from "@/category/usecases/list/actions";
import { CategoryService } from "@/category/domain/gateway/category.service";

export const loadAllCategoriesEpic: Epic = (action$: Observable<LoadAllCategoriesAction>,
                                            store: StateObservable<AppState>,
                                            {categoryService}: { categoryService: CategoryService }) =>
    action$.pipe(
        ofType(LOAD_ALL_CATEGORIES),
        switchMap(() => categoryService.getAllCategories()
            .pipe(
                map(categories => loadAllCategoriesSucceeded(categories)),
                catchError(error => of(loadAllCategoriesFailed(error)))
            )
        )
    )
