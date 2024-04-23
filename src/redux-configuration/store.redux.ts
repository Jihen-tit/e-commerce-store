import { configureStore, Store } from "@reduxjs/toolkit";

import { type AppState } from "@/redux-configuration/appState";
import { appRootReducer } from "@/redux-configuration/appRootReducer";
import { appRootEpic, epicsMiddleware } from "@/redux-configuration/appRootEpic";

export const reduxStore = (): Store<AppState> => {

    const options = {
        reducer: appRootReducer,
        middleware: [epicsMiddleware]
    };
    const store = configureStore(options);

    epicsMiddleware.run(appRootEpic);
    return store;
};
