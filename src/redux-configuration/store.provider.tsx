"use client";

import { Provider } from "react-redux";
import { reduxStore } from "@/redux-configuration/store.redux";

export const store = reduxStore();

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};
