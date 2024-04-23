import { combineEpics, Epic } from "redux-observable";
import { loadAllCategoriesEpic } from "@/category/usecases/list/epic";

export const categoryRootEpic: Epic =  combineEpics(loadAllCategoriesEpic)
