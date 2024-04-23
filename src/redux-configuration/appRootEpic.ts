import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { productRootEpic } from "@/product/config/rootEpic";
import { productEpicDependencies } from "@/product/config/epic.dependencies";

export const appRootEpic = combineEpics(
    productRootEpic
)

export const epicsMiddleware = createEpicMiddleware({
    dependencies: {
        ...productEpicDependencies
    }
})
