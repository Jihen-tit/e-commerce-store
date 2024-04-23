"use client";

import { reduxStore } from "@/redux-configuration/store.redux";
import { Provider } from "react-redux";

export const store = reduxStore();

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};
