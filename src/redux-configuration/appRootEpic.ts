import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { productRootEpic } from "@/product/config/rootEpic";
import { productEpicDependencies } from "@/product/config/epic.dependencies";
import { categoryRootEpic } from "@/category/config/rootEpic";
import { categoryEpicDependencies } from "@/category/config/epic.dependencies";

export const appRootEpic = combineEpics(
    productRootEpic,
    categoryRootEpic
)

export const epicsMiddleware = createEpicMiddleware({
    dependencies: {
        ...productEpicDependencies,
        ...categoryEpicDependencies
    }
})
