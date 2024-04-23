"use client";

import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "@/redux-configuration/appState";
import { loadProducts } from "@/product/usecases/list/actions";
import { productsSelector } from "@/product/usecases/list/selectors";

export default function Home() {

    const dispatch = useDispatch()
    const products = useSelector((state: AppState) => productsSelector(state))

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p>Product list</p>

                {products && products.map(item => <p key={item.id}>{item.title}</p>)}
            </div>
        </main>
    );
}
