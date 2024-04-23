"use client";

import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "@/redux-configuration/appState";
import { loadProducts } from "@/product/usecases/list/actions";
import { productsSelector } from "@/product/usecases/list/selectors";
import { ProductCard } from "@/product/adapters/primaries/components/product.card";

export default function ProductsByCategories() {

    const dispatch = useDispatch()
    const products = useSelector((state: AppState) => productsSelector(state))

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    return (
        <main className="min-h-screen p-24">
            <div className="w-full max-w-5xl">
                <h1 className={"mb-12"}>Product list</h1>

                <div className="grid grid-cols-4 gap-4">
                    {products && products.map(item => <ProductCard key={item.id} product={item}/>)}
                </div>
            </div>
        </main>
    );
}
