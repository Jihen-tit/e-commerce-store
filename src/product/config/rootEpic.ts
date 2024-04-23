import { combineEpics, Epic } from "redux-observable";
import { loadProductsEpic } from "@/product/usecases/list/epic";

export const productRootEpic: Epic =  combineEpics(loadProductsEpic)
