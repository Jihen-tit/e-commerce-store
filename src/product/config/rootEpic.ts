import { combineEpics, Epic } from "redux-observable";

import { loadProductsEpic } from "@/product/usecases/list/epic";
import { loadProductByIdEpic } from "@/product/usecases/details/epic";

export const productRootEpic: Epic =  combineEpics(
    loadProductsEpic,
    loadProductByIdEpic
)
